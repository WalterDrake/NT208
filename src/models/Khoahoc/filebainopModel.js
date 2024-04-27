import Joi from "joi";
import { ObjectId } from "mongodb";
import { GET_DB } from "~/config/mongodb";
import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } from "~/utils/validators";

const COURSE_COLLECTION_NAME = "courses";
const COURSE_COLLECTION_SCHEMA = Joi.object({
  nguoinop: Joi.string().required(),
  linkpdf: Joi.string().required(),
  createdAt: Joi.date().timestamp("javascript").default(Date.now),
});

const INVALID_UPDATE_FIELDS = ["_id", "createdAt"];

const validateBeforeCreate = async (data) => {
  return await COURSE_COLLECTION_SCHEMA.validateAsync(data, {
    abortEarly: false,
  });
};

const createNew = async (data) => {
  try {
    const validData = await validateBeforeCreate(data);
    const createdBoard = await GET_DB()
      .collection(COURSE_COLLECTION_NAME)
      .insertOne(validData);
    return createdBoard;
  } catch (error) {
    throw new Error(error);
  }
};

const findOneById = async (boardId) => {
  try {
    const result = await GET_DB()
      .collection(COURSE_COLLECTION_NAME)
      .findOne({ _id: new ObjectId(boardId) });
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

const getDetails = async (id) => {
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

export const courseModel = {
  COURSE_COLLECTION_NAME,
  COURSE_COLLECTION_SCHEMA,
  createNew,
  findOneById,
  getDetails,
};
