<<<<<<< HEAD
import Joi from 'joi'
import { ObjectId } from 'mongodb'
import { GET_DB } from '~/config/mongodb'
import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } from '~/utils/validators'
import { itemModel } from './itemModel'
import { baitapModel } from './filebainopModel'
import { eventModel } from '../DienDang/eventNotiModel'
import { courseModel } from './courseModel'
import { studentModel } from '~/models/studentModel'
=======
import Joi from "joi";
import { ObjectId } from "mongodb";
import { GET_DB } from "~/config/mongodb";
import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } from "~/utils/validators";
import { itemModel } from "./itemModel";
import { baitapModel } from "./filebainopModel";
import { eventModel } from "../DienDang/eventNotiModel";
import { courseModel } from "./courseModel";
import { courseController } from "~/controllers/courseController";
import { get } from "lodash";
>>>>>>> 8ce1313fe4b8d4db4b1b1052bbba7d924cf68e9d

const NOTI_COLLECTION_NAME = "notifications";
const NOTI_COLLECTION_SCHEMA = Joi.object({
  title: Joi.string().required().min(3).max(50).trim().strict(),
  description: Joi.string().required().min(3).max(255).trim().strict(),
  deadline: Joi.date().greater("now").iso().required(),
  listNguoinop: Joi.array()
    .items(Joi.string().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE))
    .default([]),
  item: Joi.string()
    .pattern(OBJECT_ID_RULE)
    .message({ OBJECT_ID_RULE_MESSAGE })
    .required(),
  createdAt: Joi.date().timestamp("javascript").default(Date.now),
});

const INVALID_UPDATE_FIELDS = ["_id", "createdAt"];

const validateBeforeCreate = async (data) => {
  return await NOTI_COLLECTION_SCHEMA.validateAsync(data, {
    abortEarly: false,
  });
};

const createNewNotiOfItem = async (data) => {
  try {
    const validData = await validateBeforeCreate(data);
    const createdNoti = await GET_DB()
      .collection(NOTI_COLLECTION_NAME)
<<<<<<< HEAD

      .insertOne(validData)
    const diendan = 'THONG BAO BAI TAP'
    const listCourseIds = await GET_DB()
      .collection(NOTI_COLLECTION_NAME)
      .aggregate([
        {
          $lookup: {
            from: itemModel.ITEM_COLLECTION_NAME, // Thay thế ITEM_COLLECTION_NAME bằng tên của collection chứa thông tin ITEM
            localField: 'item',
            foreignField: '_id',
            as: 'itemInfo',
          },
        },
        {
          $unwind: '$itemInfo',
        },
        {
          $lookup: {
            from: courseModel.COURSE_COLLECTION_NAME, // Thay thế COURSE_COLLECTION_NAME bằng tên của collection chứa thông tin COURSE
            localField: 'itemInfo.course',
            foreignField: '_id',
            as: 'courseInfo',
          },
        },
        {
          $unwind: '$courseInfo',
        },
        {
          $project: {
            courseId: '$courseInfo._id',
          },
        },
      ])
      .toArray()
    var idcourse = listCourseIds[0].courseId
    const studentList = await GET_DB()
      .collection(studentModel.USER_COLLECTION_NAME)
      .findMany({ course: { $in: idcourse } })
      .project({ _id: 1 })
      .toArray()
    const createevent = await eventModel.createNew(
      diendan,
      createdNoti.insertedId,
      studentList
    )
    return createdNoti

=======
      .insertOne(validData);
    const diendan = "THONG BAO BAI TAP";
    console.log("data.item", data.item);
    const studentofCourse = await courseController.getListStudentofCouresbyItem(
      data.item
    );
    console.log("studentofCourse", studentofCourse);
    const createevent = await eventModel.createNew(
      diendan,
      createdNoti.insertedId,
      studentofCourse
    );
    const pushnotionitem = await itemModel.pushToListNoti(
      data.item,
      createdNoti.insertedId
    );
    return createdNoti;
>>>>>>> 8ce1313fe4b8d4db4b1b1052bbba7d924cf68e9d
  } catch (error) {
    throw new Error(error);
  }
};

const findOneById = async (notiId) => {
  try {
    const result = await GET_DB()
      .collection(NOTI_COLLECTION_NAME)
      .findOne({ _id: new ObjectId(notiId) });
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

const getDetailsAllNoti = async () => {
  try {
    const result = await GET_DB()
      .collection(NOTI_COLLECTION_NAME)
      .find()
      .toArray();

    return result;
  } catch (error) {
    throw new Error(error);
  }
};
const deleteNotiOfItem = async (idNotis) => {
  try {
    const deleteItem = await itemModel.deleteOneNoti(idNotis);
    const user = await GET_DB()
      .collection(notiModel.NOTI_COLLECTION_NAME)
      .find({
        _id: new ObjectId(idNotis),
      });
    for (const users of user) {
      const deleteuser = await baitapModel.deleteOneBaitap(users._id);
    }
    return true;
  } catch (error) {
    throw new Error(error);
  }
};

const getListNotiOfItem = async (idItems) => {
  try {
    const result = await GET_DB()
      .collection(notiModel.NOTI_COLLECTION_NAME)
      .find({
        item: idItems,
      })
      .toArray();
    return result;
  } catch (error) {
    throw new Error(error);
  }
};
const pushListNguoinop = async (idnoti, idusers) => {
  try {
    const result = await GET_DB()
      .collection(notiModel.NOTI_COLLECTION_NAME)
      .updateOne(
        {
          _id: new ObjectId(idnoti),
        },
        { $push: { listNguoinop: String(idusers) } }
      );
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

export const notiModel = {
  NOTI_COLLECTION_NAME,
  NOTI_COLLECTION_SCHEMA,
  findOneById,
  // Danh cho Admin
  getDetailsAllNoti, //

  // Danh cho Teacher
  createNewNotiOfItem, // truyen data
  deleteNotiOfItem,
  pushListNguoinop, // truyen noti

  // Danh cho hoc sinh
  getListNotiOfItem, // truyen id item
};
