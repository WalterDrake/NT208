import Joi from 'joi'
import { ObjectId } from 'mongodb'
import { GET_DB } from '~/config/mongodb'
import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } from '~/utils/validators'

const BAITAP_COLLECTION_NAME = 'baitap'
const BAITAP_COLLECTION_SCHEMA = Joi.object({
  nguoinop: Joi.string()
    .pattern(OBJECT_ID_RULE)
    .message(OBJECT_ID_RULE_MESSAGE),
  linkpdf: Joi.string().required(),
  createdAt: Joi.date().timestamp('javascript').default(Date.now)
})

const INVALID_UPDATE_FIELDS = ['_id', 'createdAt']

const validateBeforeCreate = async (data) => {
  return await BAITAP_COLLECTION_SCHEMA.validateAsync(data, {
    abortEarly: false
  })
}

const createNew = async (data) => {
  try {
    const validData = await validateBeforeCreate(data)
    const createdBaitap = await GET_DB()
      .collection(BAITAP_COLLECTION_NAME)
      .insertOne(validData)
    return createdBaitap
  } catch (error) {
    throw new Error(error)
  }
}

const findOneById = async (btId) => {
  try {
    const result = await GET_DB()
      .collection(BAITAP_COLLECTION_NAME)
      .findOne({ _id: new ObjectId(btId) })
    return result
  } catch (error) {
    throw new Error(error)
  }
}

const getDetails = async () => {
  try {
    const result = await GET_DB()
      .collection(BAITAP_COLLECTION_NAME)
      .find()
      .toArray()

    return result
  } catch (error) {
    throw new Error(error)
  }
}

export const baitapModel = {
  BAITAP_COLLECTION_NAME,
  BAITAP_COLLECTION_SCHEMA,
  createNew,
  findOneById,
  getDetails
}
