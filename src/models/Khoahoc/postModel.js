import Joi from "joi";
import { ObjectId } from "mongodb";
import { GET_DB } from "~/config/mongodb";
import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } from "~/utils/validators";

const POST_COLLECTION_NAME = "posts";
const POST_COLLECTION_SCHEMA = Joi.object({
  title: Joi.string().required().min(3).max(50).trim().strict(),
  description: Joi.string().required().min(3).max(255).trim().strict(),
  linkpdf: Joi.string().required().trim().strict(),
  createdAt: Joi.date().timestamp("javascript").default(Date.now),
});

const INVALID_UPDATE_FIELDS = ["_id", "createdAt"];

const validateBeforeCreate = async (data) => {
  return await POST_COLLECTION_SCHEMA.validateAsync(data, {
    abortEarly: false,
  });
};

const createNew = async (data) => {
  try {
    const validData = await validateBeforeCreate(data);
    const createdPost = await GET_DB()
      .collection(COURSE_COLLECTION_NAME)
      .insertOne(validData);
    return createdPost;
  } catch (error) {
    throw new Error(error);
  }
};

const findOneById = async (postId) => {
  try {
    const result = await GET_DB()
      .collection(POST_COLLECTION_NAME)
      .findOne({ _id: new ObjectId(postId) });
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

const getDetails = async (id) => {
  try {
    const result = await GET_DB()
      .collection(COURSE_COLLECTION_NAME)
      .findOne({ _id: new ObjectId(id) });

    return result;
  } catch (error) {
    throw new Error(error);
  }
};

const updateItem = async (postId, updateData) => {
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
        { _id: new ObjectId(postId) },
        { $set: updateData },
        { returnDocument: "after" } // sẽ trả về kết quả mới sau khi cập nhật
      );
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

export const postModel = {
  POST_COLLECTION_NAME,
  POST_COLLECTION_SCHEMA,
  createNew,
  findOneById,
  getDetails,
  updateItem,
};
