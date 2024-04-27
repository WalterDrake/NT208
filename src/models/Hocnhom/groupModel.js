import Joi from "joi";
import { ObjectId } from "mongodb";
import { GET_DB } from "~/config/mongodb";
import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } from "~/utils/validators";

const GROUP_COLLECTION_NAME = "groups";
const GROUP_COLLECTION_SCHEMA = Joi.object({
  title: Joi.string().required().min(3).max(50).trim().strict(),
  description: Joi.string().required().min(3).max(255).trim().strict(),
  createdAt: Joi.date().timestamp("javascript").default(Date.now),
});

const INVALID_UPDATE_FIELDS = ["_id", "createdAt"];

const validateBeforeCreate = async (data) => {
  return await GROUP_COLLECTION_SCHEMA.validateAsync(data, {
    abortEarly: false,
  });
};

const createNew = async (data) => {
  try {
    const validData = await validateBeforeCreate(data);
    const createdBoard = await GET_DB()
      .collection(GROUP_COLLECTION_NAME)
      .insertOne(validData);
    return createdBoard;
  } catch (error) {
    throw new Error(error);
  }
};

const findOneById = async (groupId) => {
  try {
    const result = await GET_DB()
      .collection(GROUP_COLLECTION_NAME)
      .findOne({ _id: new ObjectId(groupId) });
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

const getDetails = async (id) => {
  try {
    const result = await GET_DB()
      .collection(GROUP_COLLECTION_NAME)
      .find()
      .toArray();

    return result;
  } catch (error) {
    throw new Error(error);
  }
};

export const groupModel = {
  GROUP_COLLECTION_NAME,
  GROUP_COLLECTION_SCHEMA,
  createNew,
  findOneById,
  getDetails,
};
