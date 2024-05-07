import Joi, { required } from 'joi'
import { ObjectId } from 'mongodb'
import { GET_DB } from '~/config/mongodb'
import {
  OBJECT_ID_RULE,
  OBJECT_ID_RULE_MESSAGE,
  EMAIL_RULE,
  TEXT_RULE,
} from '~/utils/validators'
import { courseModel } from '../Khoahoc/courseModel'
import { response } from 'express'

const COMPLAIN_COLLECTION_NAME = 'complain'
const COMPLAIN_COLLECTION_SCHEMA = Joi.object().keys({
  //email thi nen loc tu FE nhung o day se loc lai
  user: Joi.string()
    .pattern(OBJECT_ID_RULE)
    .message(OBJECT_ID_RULE_MESSAGE)
    .required(),
  complain: Joi.string().trim().required(),
  owner: Joi.string()
    .pattern(OBJECT_ID_RULE)
    .message(OBJECT_ID_RULE_MESSAGE)
    .required(),
  createdAt: Joi.date().timestamp('javascript').default(Date.now)
})

const INVALID_UPDATE_FIELDS = ['_id', 'createdAt']

const validateBeforeCreate = async (data) => {
  return await USER_COLLECTION_SCHEMA.validateAsync(data, {
    abortEarly: false
  })
}
const createNew = async (data) => {
  try {
    const validData = await validateBeforeCreate(data)
    const created = await GET_DB()
      .collection(COMPLAIN_COLLECTION_NAME)
      .insertOne(validData)
    return created
  } catch (error) {
    throw new Error(error)
  }
}

const findOneById = async (ids) => {
  try {
    const result = await GET_DB()
      .collection(COMPLAIN_COLLECTION_NAME)
      .findOne({ _id: new ObjectId(ids) })
    return result
  } catch (error) {
    throw new Error(error)
  }
}

const getDetails = async (id) => {
  try {
    const result = await GET_DB()
      .collection(COMPLAIN_COLLECTION_NAME)
      .findOne({ _id: new ObjectId(id) })
    return result
  } catch (error) {
    throw new Error(error)
  }
}

const getDetailsAll = async () => {
  try {
    const result = await GET_DB()
      .collection(COMPLAIN_COLLECTION_NAME)
      .find()
      .toArray()
    return result
  } catch (error) {
    throw new Error(error)
  }
}
const findOnSearch = async (req, res, next) => {
  try {
    req.query.q
    const articles = await GET_DB()
      .collection(courseModel.COURSE_COLLECTION_NAME)
      .find({ title: { $regex: req.query.q, $options: 'i' } })
      .toArray()
    return res.json(articles)
  } catch (error) {
    throw new Error(error)
  }
}

export const complainModel = {
  COMPLAIN_COLLECTION_NAME,
  COMPLAIN_COLLECTION_SCHEMA,

  findOneById,

  //Danh cho Teacher va Hocsinh
  createNew,
  getDetailsAll,
  findOnSearch,
}
