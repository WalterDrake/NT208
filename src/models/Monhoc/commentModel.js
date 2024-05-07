import Joi from 'joi'
import { ObjectId } from 'mongodb'
import { GET_DB } from '~/config/mongodb'
import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } from '~/utils/validators'

// Define Collection (Name & Schema)
const COMMENT_COLLECTION_NAME = 'comment'
const COMMENT_COLLECTION_SCHEMA = Joi.object({
  owner: Joi.string()
    .pattern(OBJECT_ID_RULE)
    .message(OBJECT_ID_RULE_MESSAGE)
    .required(),
  message: Joi.string().trim().required(),
  createdAt: Joi.date().timestamp('javascript').default(Date.now),
  cBoxId: Joi.string()
    .pattern(OBJECT_ID_RULE)
    .message(OBJECT_ID_RULE_MESSAGE)
    .required()
})

const INVALID_UPDATE_FIELDS = ['_id', 'createdAt', 'cBoxId']

const validateBeforeCreate = async (data) => {
  return await COMMENT_COLLECTION_SCHEMA.validateAsync(data, {
    abortEarly: false
  })
}

const createNew = async (data) => {
  try {
    const validData = await validateBeforeCreate(data)
    const newDataToAdd = {
      ...validData,
      owner : new ObjectId(validData.owner),
      cBoxId : new ObjectId(validData.cBoxId)
    }
    const createdStudy = await GET_DB()
      .collection(COMMENT_COLLECTION_NAME)
      .insertOne(newDataToAdd)
    return createdStudy
  } catch (error) {
    throw new Error(error)
  }
}
const findOneById = async (cboxId) => {
  try {
    const result = await GET_DB()
      .collection(COMMENT_COLLECTION_NAME)
      .findOne({ _id: new ObjectId(cboxId) })
    return result
  } catch (error) {
    throw new Error(error)
  }
}

const update = async (commentId, updateData) => {
  try {
    // Filter field before updating
    Object.keys(updateData).forEach(fieldName => {
      if (INVALID_UPDATE_FIELDS.includes(fieldName)) {
        delete updateData[fieldName]
      }
    })

    const result = await GET_DB().collection(COMMENT_COLLECTION_NAME).findOneAndUpdate(
      { _id: new ObjectId(commentId) },
      { $set: updateData },
      { returnDocument: 'after' } // returns the updated document.
    )
    return result
  } catch (error) { throw new Error(error) }
}

const deleteOneById = async (messageId) => {
  try {
    const result = await GET_DB().collection(COMMENT_COLLECTION_NAME).deleteOne({ _id: new ObjectId(messageId) })
    return result
  } catch (error) { throw new Error(error) }
}

export const commentModel = {
  COMMENT_COLLECTION_NAME,
  createNew,
  findOneById,
  update,
  deleteOneById
}
