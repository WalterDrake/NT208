import Joi from "joi";
import { ObjectId } from "mongodb";
import { GET_DB } from "~/config/mongodb";
import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } from "~/utils/validators";

// Define Collection (Name & Schema)
const COMMENTBOX_COLLECTION_NAME = "commentboxs";
const COMMENTBOX_COLLECTION_SCHEMA = Joi.object({
  listcomment: Joi.array()
    .items(Joi.string().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE))
    .default([]),
  createdAt: Joi.date().timestamp("javascript").default(Date.now),
});

const INVALID_UPDATE_FIELDS = ["_id", "createdAt"];

const validateBeforeCreate = async (data) => {
  return await COMMENTBOX_COLLECTION_SCHEMA.validateAsync(data, {
    abortEarly: false,
  });
};

const createNew = async (data) => {
  try {
    const validData = await validateBeforeCreate(data);
    const createdStudy = await GET_DB()
      .collection(COMMENTBOX_COLLECTION_NAME)
      .insertOne(validData);
    return createdStudy;
  } catch (error) {
    throw new Error(error);
  }
};

const findOneById = async (cboxId) => {
  try {
    const result = await GET_DB()
      .collection(COMMENTBOX_COLLECTION_NAME)
      .findOne({ _id: new ObjectId(cboxId) });
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

const getDetails = async () => {
  try {
    const result = await GET_DB()
      .collection(COMMENTBOX_COLLECTION_NAME)
      .find()
      .toArray();

    return result;
  } catch (error) {
    throw new Error(error);
  }
};

export const cboxModel = {
  COMMENTBOX_COLLECTION_NAME,
  COMMENTBOX_COLLECTION_NAME,
  createNew,
  findOneById,
  getDetails,
};
