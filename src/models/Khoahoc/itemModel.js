import Joi from 'joi'
import { ObjectId } from 'mongodb'
import { GET_DB } from '~/config/mongodb'
import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } from '~/utils/validators'

const ITEM_COLLECTION_NAME = 'items'
const ITEM_COLLECTION_SCHEMA = Joi.object({
  title: Joi.string().required().min(3).max(50).trim().strict(),
  description: Joi.string().required().min(3).max(255).trim().strict(),
  listVideoids: Joi.array()
    .items(Joi.string().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE))
    .default([]),
  listPostids: Joi.array()
    .items(Joi.string().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE))
    .default([]),
  listNotids: Joi.array()
    .items(Joi.string().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE))
    .default([]),
  createdAt: Joi.date().timestamp('javascript').default(Date.now)
})

const INVALID_UPDATE_FIELDS = ['_id', 'createdAt']

const validateBeforeCreate = async (data) => {
  return await ITEM_COLLECTION_SCHEMA.validateAsync(data, {
    abortEarly: false
  })
}

const createNew = async (data) => {
  try {
    const validData = await validateBeforeCreate(data)
    const createdBoard = await GET_DB()
      .collection(ITEM_COLLECTION_NAME)
      .insertOne(validData)
    return createdBoard
  } catch (error) {
    throw new Error(error)
  }
}

const findOneById = async (itemId) => {
  try {
    const result = await GET_DB()
      .collection(ITEM_COLLECTION_NAME)
      .findOne({ _id: new ObjectId(itemId) })
    return result
  } catch (error) {
    throw new Error(error)
  }
}

const getDetails = async () => {
  try {
    const result = await GET_DB()
      .collection(ITEM_COLLECTION_NAME)
      .find()
      .toArray()

    return result
  } catch (error) {
    throw new Error(error)
  }
}

const updateItem = async (itemId, updateData) => {
  try {
    // Lọc những field mà chúng ta không cho phép cập nhật linh tinh
    Object.keys(updateData).forEach((fieldName) => {
      if (INVALID_UPDATE_FIELDS.includes(fieldName)) {
        delete updateData[fieldName]
      }
    })

    const result = await GET_DB()
      .collection(BOARD_COLLECTION_NAME)
      .findOneAndUpdate(
        { _id: new ObjectId(boardId) },
        { $set: updateData },
        { returnDocument: 'after' } // sẽ trả về kết quả mới sau khi cập nhật
      )
    return result
  } catch (error) {
    throw new Error(error)
  }
}

export const itemModel = {
  ITEM_COLLECTION_NAME,
  ITEM_COLLECTION_SCHEMA,
  createNew,
  findOneById,
  getDetails,
  updateItem
}
