import Joi from 'joi'
import { ObjectId } from 'mongodb'
import { GET_DB } from '~/config/mongodb'
import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } from '~/utils/validators'
import { userModel } from '../userModel'

const COURSE_COLLECTION_NAME = 'courses'

const COURSE_COLLECTION_SCHEMA = Joi.object({
  title: Joi.string().required().min(3).max(50).trim().strict(), //yêu cầu
  description: Joi.string().required().min(3).max(255).trim().strict(), // yêu cầu
  linkimgae: Joi.string().default(''),
  memberof: Joi.number().default(0),
  owner: Joi.string()
    .pattern(OBJECT_ID_RULE)
    .message({ OBJECT_ID_RULE_MESSAGE }),
  createdAt: Joi.date().timestamp('javascript').default(Date.now)
})

const INVALID_UPDATE_FIELDS = ['_id', 'createdAt', 'owner']

const validateBeforeCreate = async (data) => {
  return await COURSE_COLLECTION_SCHEMA.validateAsync(data, {
    abortEarly: false
  })
}

const createNew = async (data) => {
  try {
    // data này phải thảo 3 yêu cầu khi Joi thực hiện
    const validData = await validateBeforeCreate(data)
    const createdBoard = await GET_DB()
      .collection(COURSE_COLLECTION_NAME)
      .insertOne(validData)
    return createdBoard
  } catch (error) {
    throw new Error(error)
  }
}

const findOneById = async (couseId) => {
  try {
    const result = await GET_DB()
      .collection(COURSE_COLLECTION_NAME)
      .findOne({ _id: new ObjectId(couseId) })
    return result
  } catch (error) {
    throw new Error(error)
  }
}

// Lấy ra danh sách toàn bộ khóa học.
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

const updateCourse = async (courseId, updateData) => {
  try {
    // Lọc những field mà chúng ta không cho phép cập nhật linh tinh
    Object.keys(updateData).forEach((fieldName) => {
      if (INVALID_UPDATE_FIELDS.includes(fieldName)) {
        delete updateData[fieldName]
      }
    })

    // Đối với những dữ liệu liên quan ObjectId, biến đổi ở đây
    const result = await GET_DB()
      .collection(COURSE_COLLECTION_NAME)
      .findOneAndUpdate(
        { _id: new ObjectId(courseId) },
        { $set: updateData },
        { returnDocument: 'after' } // sẽ trả về kết quả mới sau khi cập nhật
      )
    return result
  } catch (error) {
    throw new Error(error)
  }
}

export const courseModel = {
  COURSE_COLLECTION_NAME,
  COURSE_COLLECTION_SCHEMA,
  createNew,
  findOneById,
  getDetails,
  updateCourse
}
