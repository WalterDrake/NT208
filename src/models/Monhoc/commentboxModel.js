import Joi from 'joi'
import { ObjectId } from 'mongodb'
import { GET_DB } from '~/config/mongodb'
import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } from '~/utils/validators'
import { commentModel } from './commentModel'

// Define Collection (Name & Schema)
const COMMENTBOX_COLLECTION_NAME = 'commentboxs'
const COMMENTBOX_COLLECTION_SCHEMA = Joi.object({
  listComment: Joi.array()
    .items(Joi.string().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE))
    .default([]),
  video: Joi.string()
    .pattern(OBJECT_ID_RULE)
    .message(OBJECT_ID_RULE_MESSAGE)
    .required(),
  createdAt: Joi.date().timestamp('javascript').default(Date.now)
})

const validateBeforeCreate = async (data) => {
  return await COMMENTBOX_COLLECTION_SCHEMA.validateAsync(data, {
    abortEarly: false
  })
}

const createNew = async (idcomplain) => {
  try {
    const datas = {
<<<<<<< HEAD
      video: new ObjectId(data)
    }
    const validData = await validateBeforeCreate(datas)
=======
      video: String(idcomplain),
    };
    const validData = await validateBeforeCreate(datas);
>>>>>>> 8ce1313fe4b8d4db4b1b1052bbba7d924cf68e9d
    const createdStudy = await GET_DB()
      .collection(COMMENTBOX_COLLECTION_NAME)
      .insertOne(validData)
    return createdStudy
  } catch (error) {
    throw new Error(error)
  }
}

const findOneById = async (cboxId) => {
  try {
    const result = await GET_DB()
      .collection(COMMENTBOX_COLLECTION_NAME)
      .findOne({ _id: new ObjectId(cboxId) })
    return result
  } catch (error) {
    throw new Error(error)
  }
}

const getDetails = async () => {
  try {
    const result = await GET_DB()
      .collection(COMMENTBOX_COLLECTION_NAME)
      .find()
<<<<<<< HEAD
      .toArray()

    return result
=======
      .toArray();
    return result;
>>>>>>> 8ce1313fe4b8d4db4b1b1052bbba7d924cf68e9d
  } catch (error) {
    throw new Error(error)
  }
}

const pushToListComment = async (commentBoxId, commentId) => {
  try {
    const result = await GET_DB()
      .collection(COMMENTBOX_COLLECTION_NAME)
      .findOneAndUpdate(
        { _id: new ObjectId(commentBoxId) },
<<<<<<< HEAD
        { $push: { listComment: new ObjectId(commentId) } },
        { returnDocument: 'after' }
      )
    return result
=======
        { $push: { listComment: String(commentId) } },
        { returnDocument: "after" }
      );
    return result;
>>>>>>> 8ce1313fe4b8d4db4b1b1052bbba7d924cf68e9d
  } catch (error) {
    throw new Error(error)
  }
}

const deleteCommentbox = async (idcbox) => {
  try {
    const result = await GET_DB()
      .collection(COMMENTBOX_COLLECTION_NAME)
      .findOneAndDelete({ _id: new ObjectId(idcbox) });
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

const pullToListComment = async (commentModel) => {
  try {
    const result = await GET_DB()
      .collection(COMMENTBOX_COLLECTION_NAME)
      .findOneAndUpdate(
<<<<<<< HEAD
        { _id: new ObjectId(commentModel.cboxId) },
        { $pull: { listComment: new ObjectId(commentModel._id) } },
        { returnDocument: 'after' }
      )
    return result
=======
        { _id: new ObjectId(commentModel.commentbox) },
        { $pull: { listComment: String(commentModel._id) } },
        { returnDocument: "after" }
      );
    return result;
>>>>>>> 8ce1313fe4b8d4db4b1b1052bbba7d924cf68e9d
  } catch (error) {
    throw new Error(error)
  }
}

const getComments = async (studyId) => {
  try {
    const result = await GET_DB()
      .collection(COMMENTBOX_COLLECTION_NAME)
      .aggregate([
        {
          $match: {
            studyId: new ObjectId(studyId)
          }
        },
        {
          $lookup: {
            from: commentModel.COMMENT_COLLECTION_NAME,
            localField: 'listComment',
            foreignField: '_id',
            as: 'Conversation'
          }
        }
      ])
      .toArray()
    return result || null
  } catch (error) {
    throw new Error(error)
  }
}

export const cboxModel = {
  COMMENTBOX_COLLECTION_NAME,
  createNew,
  findOneById,
  getDetails,
  pushToListComment,
  pullToListComment,
<<<<<<< HEAD
  getComments
}
=======
  getComments,
  deleteCommentbox,
};
>>>>>>> 8ce1313fe4b8d4db4b1b1052bbba7d924cf68e9d
