import Joi from 'joi'
import { ObjectId } from 'mongodb'
import { GET_DB } from '~/config/mongodb'
import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } from '~/utils/validators'

// Define Collection (Name & Schema)
const STUDY_COLLECTION_NAME = 'studies'
const STUDY_COLLECTION_SCHEMA = Joi.object({
  title: Joi.string().required().min(3).max(50).trim().strict(), //yêu cầu
  description: Joi.string().required().min(3).max(255).trim().strict(), // yêu cầu
  linkimgae: Joi.string().default(''),
  memberof: Joi.number().default(0),
  owner: Joi.string()
    .pattern(OBJECT_ID_RULE)
    .message({ OBJECT_ID_RULE_MESSAGE })
    .required(),
  khoa: Joi.string().min(3).max(20).trim().strict(),
  commentBox: Joi.string()
    .pattern(OBJECT_ID_RULE)
    .message(OBJECT_ID_RULE_MESSAGE),
  createdAt: Joi.date().timestamp('javascript').default(Date.now)
})

const INVALID_UPDATE_FIELDS = ['_id', 'createdAt', 'commentBox', 'owner']

const validateBeforeCreate = async (data) => {
  return await STUDY_COLLECTION_SCHEMA.validateAsync(data, {
    abortEarly: false
  })
}

const createNew = async (data) => {
  try {
    const validData = await validateBeforeCreate(data)
    const createdStudy = await GET_DB()
      .collection(STUDY_COLLECTION_NAME)
      .insertOne(validData)
    return createdStudy
  } catch (error) {
    throw new Error(error)
  }
}

const findOneById = async (studyId) => {
  try {
    const result = await GET_DB()
      .collection(STUDY_COLLECTION_NAME)
      .findOne({ _id: new ObjectId(studyId) })
    return result
  } catch (error) {
    throw new Error(error)
  }
}

const getDetails = async () => {
  try {
    const result = await GET_DB()
      .collection(STUDY_COLLECTION_NAME)
      .find()
      .toArray()

    return result
  } catch (error) {
    throw new Error(error)
  }
}

const updateStudy = async (postId, updateData) => {
  try {
    // Lọc những field mà chúng ta không cho phép cập nhật linh tinh
    Object.keys(updateData).forEach((fieldName) => {
      if (INVALID_UPDATE_FIELDS.includes(fieldName)) {
        delete updateData[fieldName]
      }
    })

    const result = await GET_DB()
      .collection(STUDY_COLLECTION_NAME)
      .findOneAndUpdate(
        { _id: new ObjectId(postId) },
        { $set: updateData },
        { returnDocument: 'after' } // sẽ trả về kết quả mới sau khi cập nhật
      )
    return result
  } catch (error) {
    throw new Error(error)
  }
}

export const studyModel = {
  STUDY_COLLECTION_NAME,
  STUDY_COLLECTION_SCHEMA,
  createNew,
  findOneById,
  getDetails,
  updateStudy
}
