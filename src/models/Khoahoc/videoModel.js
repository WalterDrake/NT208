import Joi from 'joi'
import { ObjectId } from 'mongodb'
import { GET_DB } from '~/config/mongodb'
import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } from '~/utils/validators'

const VIDEO_COLLECTION_NAME = 'videos'
const VIDEO_COLLECTION_SCHEMA = Joi.object({
  title: Joi.string().required().min(3).max(50).trim().strict(),
  description: Joi.string().required().min(3).max(255).trim().strict(),
  linkvideo: Joi.string().required().trim().strict(),
  commentBox: Joi.string()
    .pattern(OBJECT_ID_RULE)
    .message(OBJECT_ID_RULE_MESSAGE),
  createdAt: Joi.date().timestamp('javascript').default(Date.now)
})

const INVALID_UPDATE_FIELDS = ['_id', 'createdAt']

const validateBeforeCreate = async (data) => {
  return await VIDEO_COLLECTION_SCHEMA.validateAsync(data, {
    abortEarly: false
  })
}

const createNew = async (data) => {
  try {
    const validData = await validateBeforeCreate(data)
    const createdvideo = await GET_DB()
      .collection(COURSE_COLLECTION_NAME)
      .insertOne(validData)
    return createdvideo
  } catch (error) {
    throw new Error(error)
  }
}

const findOneById = async (videoId) => {
  try {
    const result = await GET_DB()
      .collection(COURSE_COLLECTION_NAME)
      .findOne({ _id: new ObjectId(videoId) })
    return result
  } catch (error) {
    throw new Error(error)
  }
}

const getDetails = async () => {
  try {
    const result = await GET_DB()
      .collection(COURSE_COLLECTION_NAME)
      .find()
      .toArray()

    return result
  } catch (error) {
    throw new Error(error)
  }
}

const updateVideo = async (videoId, updateData) => {
  try {
    // Lọc những field mà chúng ta không cho phép cập nhật linh tinh
    Object.keys(updateData).forEach((fieldName) => {
      if (INVALID_UPDATE_FIELDS.includes(fieldName)) {
        delete updateData[fieldName]
      }
    })

    const result = await GET_DB()
      .collection(USER_COLLECTION_NAME)
      .findOneAndUpdate(
        { _id: new ObjectId(videoId) },
        { $set: updateData },
        { returnDocument: 'after' } // sẽ trả về kết quả mới sau khi cập nhật
      )
    return result
  } catch (error) {
    throw new Error(error)
  }
}

export const videoModel = {
  VIDEO_COLLECTION_NAME,
  VIDEO_COLLECTION_SCHEMA,
  createNew,
  findOneById,
  getDetails,
  updateVideo
}
