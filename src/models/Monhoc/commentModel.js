import Joi from "joi";
import { ObjectId } from "mongodb";
import { GET_DB } from "~/config/mongodb";
import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } from "~/utils/validators";

// Define Collection (Name & Schema)
const COMMENT_COLLECTION_NAME = "comment";
const COMMENT_COLLECTION_SCHEMA = Joi.object({
  ownercomment: Joi.string()
    .pattern(OBJECT_ID_RULE)
    .message(OBJECT_ID_RULE_MESSAGE)
    .required(),
  datatext: Joi.string().trim().required(),
  createdAt: Joi.date().timestamp("javascript").default(Date.now),
});

const INVALID_UPDATE_FIELDS = ["_id", "createdAt"];

const validateBeforeCreate = async (data) => {
  return await COMMENT_COLLECTION_SCHEMA.validateAsync(data, {
    abortEarly: false,
  });
};

const createNew = async (data) => {
  try {
    const validData = await validateBeforeCreate(data);
    const createdStudy = await GET_DB()
      .collection(COMMENT_COLLECTION_NAME)
      .insertOne(validData);
    return createdStudy;
  } catch (error) {
    throw new Error(error);
  }
};

const findOneById = async (cboxId) => {
  try {
    const result = await GET_DB()
      .collection(COMMENT_COLLECTION_NAME)
      .findOne({ _id: new ObjectId(cboxId) });
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

export const commentModel = {
  COMMENT_COLLECTION_NAME,
  COMMENT_COLLECTION_NAME,
  createNew,
  findOneById,
};
