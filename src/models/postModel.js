import Joi from 'joi'
import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } from '~/utils/validators'
import { ObjectId } from 'mongodb'
import { GET_DB } from '~/config/mongodb'

// Define Collection (name & schema)
const POST_COLLECTION_NAME = 'posts'
const POST_COLLECTION_SCHEMA = Joi.object({
  senderId: Joi.string().required().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE).required(),
  description: Joi.string().required().min(3).trim().strict().required(),
  image: Joi.string().required().min(3).max(50).trim().strict().required()
})

const INVALID_UPDATE_FIELDS = ['_id', 'senderId']

const validateBeforeCreate = async (data) =>
{
  return await POST_COLLECTION_SCHEMA.validateAsync(data, { abortEarly: false })
}

const createNew = async (data) =>
{
  try {
    const validData = await validateBeforeCreate(data)
    const newPosttoAdd =
    {
      ...validData,
      senderId: new ObjectId(validData.senderId)
    }
    const createPost = await GET_DB().collection(POST_COLLECTION_NAME).insertOne(newPosttoAdd)
    return createPost
  } catch (error) {throw new Error(error)}
}
const findOneById = async (id) => {
  try {
    const result = await GET_DB().collection(POST_COLLECTION_NAME).findOne({
      _id: new ObjectId(id)
    })
    return result
  } catch (error) {
    throw new Error(error)
  }
}

const update = async (postId, updateData) => {
  try {
    // Filter field before updating
    Object.keys(updateData).forEach(fieldName => {
      if (INVALID_UPDATE_FIELDS.includes(fieldName)) {
        delete updateData[fieldName]
      }
    })

    const result = await GET_DB().collection(POST_COLLECTION_NAME).findOneAndUpdate(
      { _id: new ObjectId(postId) },
      { $set: updateData },
      { returnDocument: 'after' } // returns the updated document.
    )
    return result
  } catch (error) { throw new Error(error) }
}


const deleteOneById = async (postId) => {
  try {
    const result = await GET_DB().collection(POST_COLLECTION_NAME).deleteOne({ _id: new ObjectId(postId) })
    return result
  } catch (error) { throw new Error(error) }
}

export const postModel = {
  POST_COLLECTION_NAME,
  createNew,
  findOneById,
  update,
  deleteOneById
}