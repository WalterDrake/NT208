import Joi from "joi";
import { ObjectId } from "mongodb";
import { GET_DB } from "~/config/mongodb";
import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } from "~/utils/validators";

// Define Collection (Name & Schema)
const STUDY_COLLECTION_NAME = "studies";
const STUDY_COLLECTION_SCHEMA = Joi.object({
  title: Joi.string().required().min(3).max(50).trim().strict(),
  description: Joi.string().required().min(3).max(255).trim().strict(),
  createdAt: Joi.date().timestamp("javascript").default(Date.now),
  updatedAt: Joi.date().timestamp("javascript").default(null),
});

const INVALID_UPDATE_FIELDS = ["_id", "createdAt"];

const validateBeforeCreate = async (data) => {
  return await STUDY_COLLECTION_SCHEMA.validateAsync(data, {
    abortEarly: false,
  });
};

const createNew = async (data) => {
  try {
    const validData = await validateBeforeCreate(data);
    const createdBoard = await GET_DB()
      .collection(STUDY_COLLECTION_NAME)
      .insertOne(validData);
    return createdBoard;
  } catch (error) {
    throw new Error(error);
  }
};

const findOneById = async (boardId) => {
  try {
    const result = await GET_DB()
      .collection(STUDY_COLLECTION_NAME)
      .findOne({ _id: new ObjectId(boardId) });
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

export const studyModel = {
  STUDY_COLLECTION_NAME,
  STUDY_COLLECTION_SCHEMA,
  createNew,
  findOneById,
};
