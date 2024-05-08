import Joi from "joi";
import { ObjectId } from "mongodb";
import { GET_DB } from "~/config/mongodb";
import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } from "~/utils/validators";
import { itemModel } from "./itemModel";
import { cboxModel } from "../Monhoc/commentboxModel";
import { commentModel } from "../Monhoc/commentModel";

const VIDEO_COLLECTION_NAME = "videos";
const VIDEO_COLLECTION_SCHEMA = Joi.object({
  title: Joi.string().required().min(3).max(50).trim().strict(),
  description: Joi.string().required().min(3).max(255).trim().strict(),
  linkvideo: Joi.string().required().trim().strict(),
  commentBox: Joi.string()
    .pattern(OBJECT_ID_RULE)
    .message(OBJECT_ID_RULE_MESSAGE),
  item: Joi.string()
    .pattern(OBJECT_ID_RULE)
    .message({ OBJECT_ID_RULE_MESSAGE })
    .required(),
  createdAt: Joi.date().timestamp("javascript").default(Date.now),
});

const INVALID_UPDATE_FIELDS = ["_id", "createdAt"];

const validateBeforeCreate = async (data) => {
  return await VIDEO_COLLECTION_SCHEMA.validateAsync(data, {
    abortEarly: false,
  });
};

const createNewVideosOfItem = async (data) => {
  try {
    const validData = await validateBeforeCreate(data);
    const createdvideo = await GET_DB()
      .collection(VIDEO_COLLECTION_NAME)
      .insertOne(validData);
    const createcommentbox = await cboxModel.createNew(createdvideo.insertedId);
    createdvideo.commentBox = createcommentbox.insertedId;
    return createdvideo;
  } catch (error) {
    throw new Error(error);
  }
};
const getDetailsAllVideos = async () => {
  try {
    const result = await GET_DB()
      .collection(VIDEO_COLLECTION_NAME)
      .find()
      .toArray();

    return result;
  } catch (error) {
    throw new Error(error);
  }
};
const findOneById = async (videoid) => {
  try {
    const result = await GET_DB()
      .collection(VIDEO_COLLECTION_NAME)
      .findOne({ _id: new ObjectId(videoid) });
    return result;
  } catch (error) {
    throw new Error(error);
  }
};
const deleteOneCommentBox = async (idcBoxs) => {
  try {
    const result = await GET_DB()
      .collection(videoModel.VIDEO_COLLECTION_NAME)
      .updateMany(
        { commentBox: [idcBoxs] },
        { $pull: { commentBox: [idcBoxs] } }
      );
    return result;
  } catch (error) {
    throw new Error(error);
  }
};
const deleteVideoOfItem = async (idVideos) => {
  try {
    const deletedItem = await itemModel.deleteOneVideo(idVideos);
    // ham xoa commentbox
    const comment = await GET_DB()
      .collection(cboxModel.COMMENTBOX_COLLECTION_NAME)
      .findOne({
        video: idVideos,
      });
    const deleteCommentbox = await cboxModel.deleteOneCommentBox(comment._id);
    return true;
  } catch (error) {
    throw new Error(error);
  }
};

const getListVideoOfItem = async (idItems) => {
  try {
    const result = await GET_DB()
      .collection(videoModel.VIDEO_COLLECTION_NAME)
      .findMany({
        item: idItems,
      })
      .toArray();
    return result;
  } catch (error) {
    throw new Error(error);
  }
};
const updateVideosOfItem = async (videoId, updateData) => {
  try {
    // Lọc những field mà chúng ta không cho phép cập nhật linh tinh
    Object.keys(updateData).forEach((fieldName) => {
      if (INVALID_UPDATE_FIELDS.includes(fieldName)) {
        delete updateData[fieldName];
      }
    });

    const result = await GET_DB()
      .collection(VIDEO_COLLECTION_NAME)
      .findOneAndUpdate(
        { _id: new ObjectId(videoId) },
        { $set: updateData },
        { returnDocument: "after" } // sẽ trả về kết quả mới sau khi cập nhật
      );
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

export const videoModel = {
  VIDEO_COLLECTION_NAME,
  VIDEO_COLLECTION_SCHEMA,
  findOneById,

  // Danh cho Admin
  getDetailsAllVideos, //

  // Danh cho Teacher
  createNewVideosOfItem, // truyen data
  updateVideosOfItem, // truyen video id va upadte data
  deleteVideoOfItem, // truyen id video

  //Phuc vu cho cai nho
  deleteOneCommentBox, // turyen id cBox

  // Danh cho hoc sinh
  getListVideoOfItem, // tuyen id Item
};
