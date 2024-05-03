import Joi from "joi";
import { ObjectId } from "mongodb";
import { GET_DB } from "~/config/mongodb";
import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } from "~/utils/validators";
import { courseModel } from "./courseModel";
import { videoModel } from "./videoModel";
import { notiModel } from "./notiModel";
import { postModel } from "./postModel";
import { courseController } from "~/controllers/courseController";
import { itemController } from "~/controllers/itemController";

const ITEM_COLLECTION_NAME = "items";
const ITEM_COLLECTION_SCHEMA = Joi.object({
  title: Joi.string().required().min(3).max(50).trim().strict(),
  description: Joi.string().required().min(3).max(255).trim().strict(),
  courseCode: Joi.string().required().min(3).max(255).trim().strict(),
  listVideoids: Joi.array()
    .items(Joi.string().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE))
    .default([]),
  listPostids: Joi.array()
    .items(Joi.string().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE))
    .default([]),
  listNotids: Joi.array()
    .items(Joi.string().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE))
    .default([]),
  teacher: Joi.string().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE),
  course: Joi.string().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE),
  createdAt: Joi.date().timestamp("javascript").default(Date.now),
});

const INVALID_UPDATE_FIELDS = ["_id", "createdAt"];

const validateBeforeCreate = async (data) => {
  return await ITEM_COLLECTION_SCHEMA.validateAsync(data, {
    abortEarly: false,
  });
};

const createItemOfCourse = async (data) => {
  try {
    const validData = await validateBeforeCreate(data);
    const createdBoard = await GET_DB()
      .collection(ITEM_COLLECTION_NAME)
      .insertOne(validData);
    return createdBoard;
  } catch (error) {
    throw new Error(error);
  }
};

const getDetailAllItem = async () => {
  try {
    const result = await GET_DB()
      .collection(ITEM_COLLECTION_NAME)
      .find()
      .toArray();
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteOneNoti = async (idNoti) => {
  try {
    const result = await GET_DB()
      .collection(itemModel.ITEM_COLLECTION_NAME)
      .updateMany(
        { listNotids: { $in: [idNoti] } },
        { $pull: { listNotids: { $in: [idNoti] } } }
      );
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteOnePost = async (idPost) => {
  try {
    const result = await GET_DB()
      .collection(itemModel.ITEM_COLLECTION_NAME)
      .updateMany(
        { listPostids: { $in: [idPost] } },
        { $pull: { listPostids: { $in: [idPost] } } }
      );
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteOneVideo = async (idVideo) => {
  try {
    const result = await GET_DB()
      .collection(itemModel.ITEM_COLLECTION_NAME)
      .updateMany(
        { listVideoids: { $in: [idVideo] } },
        { $pull: { listVideoids: { $in: [idVideo] } } }
      );
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

const getListItemOfCourse = async (idCourse) => {
  try {
    const result = await GET_DB()
      .collection(itemController.ITEM_COLLECTION_NAME)
      .findMany({
        course: idCourse,
      })
      .toArray();
    return result;
  } catch (error) {
    throw new Error(error);
  }
};
const deleteItemOfCourse = async (idItem) => {
  try {
    // truyen vao ten khoa hoc va ten item
    const course = await GET_DB()
      .collection(courseModel.COURSE_COLLECTION_NAME)
      .findOne({ listitem: { $in: idItem } });

    if (!course) {
      //Goi toi ham xoa 1 Item trong Course
      const deletedCourse = await courseController.deleteOneItem(idItem);
      // Goi toi ham xoa 1 video dung vong lap de xoa list video
      const videos = await GET_DB()
        .collection(videoModel.VIDEO_COLLECTION_NAME)
        .find({
          item: idItem,
        })
        .toArray();

      for (const video of videos) {
        await videoModel.deleteOneVideo(video._id);
      }

      // Goi toi ham xoa 1 video dung vong lap de xoa list video
      const deletenoti = await GET_DB()
        .collection(notiModel.NOTI_COLLECTION_NAME)
        .find({
          item: idItem,
        })
        .toArray();

      for (const noti of deletenoti) {
        await notiModel.deleteOneNoti(noti._id);
      }
      // Goi toi ham xoa 1 video dung vong lap de xoa list video
      const deletepost = await GET_DB()
        .collection(postModel.POST_COLLECTION_NAME)
        .find({
          item: idItem,
        })
        .toArray();

      for (const post of deletepost) {
        await postModel.deleteOnePost(post._id);
      }

      const deleteCourse = await GET_DB()
        .collection(itemModel.ITEM_COLLECTION_NAME)
        .deleteOne({
          _id: new ObjectId(idItem),
        });
      return true;
    }
    return false;
  } catch (error) {
    throw new Error(error);
  }
};

const updateDataItemOfCourse = async (itemId, updateData) => {
  try {
    // Lọc những field mà chúng ta không cho phép cập nhật linh tinh
    Object.keys(updateData).forEach((fieldName) => {
      if (INVALID_UPDATE_FIELDS.includes(fieldName)) {
        delete updateData[fieldName];
      }
    });

    const result = await GET_DB()
      .collection(BOARD_COLLECTION_NAME)
      .findOneAndUpdate(
        { _id: new ObjectId(itemId) },
        { $set: updateData },
        { returnDocument: "after" } // sẽ trả về kết quả mới sau khi cập nhật
      );
    return result;
  } catch (error) {
    throw new Error(error);
  }
};
const findOneById = async (itemId) => {
  try {
    const result = await GET_DB()
      .collection(ITEM_COLLECTION_NAME)
      .findOne({ _id: new ObjectId(itemId) });
    return result;
  } catch (error) {
    throw new Error(error);
  }
};
export const itemModel = {
  ITEM_COLLECTION_NAME,
  ITEM_COLLECTION_SCHEMA,
  findOneById,
  //Danh cho Admin
  getDetailAllItem, // Lay het danh sach Item trong database

  //Danh cho Teacher
  createItemOfCourse, // truyen data
  updateDataItemOfCourse, // id item va update data
  deleteItemOfCourse, //id item

  // Phuc vu xoa cai nho
  deleteOneVideo, // idVideo
  deleteOnePost, // id post
  deleteOneNoti, // id Noti

  //Danh cho Student
  getListItemOfCourse, //id course
};
