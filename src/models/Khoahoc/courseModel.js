import Joi from "joi";
import { ObjectId } from "mongodb";
import { GET_DB } from "~/config/mongodb";
import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } from "~/utils/validators";
import { userModel } from "../studentModel";

const COURSE_COLLECTION_NAME = "courses";

const COURSE_COLLECTION_SCHEMA = Joi.object({
  title: Joi.string().required().min(3).max(50).trim().strict(), //yêu cầu
  description: Joi.string().required().min(3).max(255).trim().strict(), // yêu cầu
  linkimage: Joi.string().default(""),
  memberof: Joi.number().default(0),
  //Nay la do admin tao
  owner: Joi.string()
    .pattern(OBJECT_ID_RULE)
    .message({ OBJECT_ID_RULE_MESSAGE })
    .required(),
  listitem: Joi.array()
    .items(Joi.string().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE))
    .default([]),
  admin: Joi.string()
    .pattern(OBJECT_ID_RULE)
    .message({ OBJECT_ID_RULE_MESSAGE })
    .required(),
  createdAt: Joi.date().timestamp("javascript").default(Date.now),
});

const INVALID_UPDATE_FIELDS = ["_id", "createdAt", "owner"];

const validateBeforeCreate = async (data) => {
  return await COURSE_COLLECTION_SCHEMA.validateAsync(data, {
    abortEarly: false,
  });
};

const createNew = async (data) => {
  try {
    // data này phải thảo 3 yêu cầu khi Joi thực hiện
    const validData = await validateBeforeCreate(data);
    const createdBoard = await GET_DB()
      .collection(COURSE_COLLECTION_NAME)
      .insertOne(validData);
    return createdBoard;
  } catch (error) {
    throw new Error(error);
  }
};

//Ho tro tim kiem tren cai thanh cong cu
const findOneById = async (couseId) => {
  try {
    const result = await GET_DB()
      .collection(COURSE_COLLECTION_NAME)
      .findOne({ _id: new ObjectId(couseId) });
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

const findOne = async (course) => {
  try {
    const result = await GET_DB().collection(COURSE_COLLECTION_NAME).findOne({
      title: course.title,
      owner: course.owner,
    });
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

// Lấy ra danh sách toàn bộ khóa học.
const getDetailsAll = async () => {
  try {
    const result = await GET_DB()
      .collection(COURSE_COLLECTION_NAME)
      .find()
      .toArray();

    return result;
  } catch (error) {
    throw new Error(error);
  }
};

const getDetailsAllbyTeacher = async (ids) => {
  try {
    const result = await GET_DB()
      .collection(COURSE_COLLECTION_NAME)
      .find({ owner: new ObjectId(ids) })
      .toArray();

    return result;
  } catch (error) {
    throw new Error(error);
  }
};

const findIdAndDelete = async (ids) => {
  try {
    const result = await GET_DB()
      .collection(COURSE_COLLECTION_NAME)
      .deleteOne({ _id: new ObjectId(ids) });
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteMany = async (ids) => {
  try {
    const result = await GET_DB()
      .collection(COURSE_COLLECTION_NAME)
      .findMany({ owner: new ObjectId(ids) });
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

//danh cho giao vien va admin
const updateCourse = async (courseId, updateData) => {
  try {
    // Lọc những field mà chúng ta không cho phép cập nhật linh tinh
    Object.keys(updateData).forEach((fieldName) => {
      if (INVALID_UPDATE_FIELDS.includes(fieldName)) {
        delete updateData[fieldName];
      }
    });

    // Đối với những dữ liệu liên quan ObjectId, biến đổi ở đây
    const result = await GET_DB()
      .collection(COURSE_COLLECTION_NAME)
      .findOneAndUpdate(
        { _id: new ObjectId(courseId) },
        { $set: updateData },
        { returnDocument: "after" } // sẽ trả về kết quả mới sau khi cập nhật
      );
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

export const courseModel = {
  COURSE_COLLECTION_NAME,
  COURSE_COLLECTION_SCHEMA,
  createNew, // không tham số
  findOneById, // có id course
  getDetailsAll, // lấy hết
  updateCourse, // có id course

  findOne, // truyền vào cả id course và id owner
  getDetailsAllbyTeacher, // Cái này là trả về thẳng cái mảng luôn thay vì ta phải query từ các id
  findIdAndDelete, // Tìm và xóa lập tức 1 khóa học
  deleteMany,
};
