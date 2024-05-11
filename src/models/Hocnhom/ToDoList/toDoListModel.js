import Joi from 'joi'
import { ObjectId } from 'mongodb'
import { GET_DB } from '~/config/mongodb'
import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } from '~/utils/validators'

// Define Collection (Name & Schema)
const TODOLIST_COLLECTION_NAME = 'todoLists'
const TODOLIST_COLLECTION_SCHEMA = Joi.object({
  boardId: Joi.string().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE),
  userId: Joi.string().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE).required()
})

const validateBeforeCreate = async (data) =>
{
  return await TODOLIST_COLLECTION_SCHEMA.validateAsync(data, { abortEarly: false })
}

const createNew = async (data) =>
{
  try {
    const validData = await validateBeforeCreate(data)
    const newtodoListToAdd =
    {
      ...validData,
      userId: new ObjectId(validData.userId)
    }
    const createdBoardList = await GET_DB().collection(TODOLIST_COLLECTION_NAME).insertOne(newtodoListToAdd)
    return createdBoardList
  } catch (error) {throw new Error(error)}
}
const findOneById = async (id) => {
  try {
    const result = await GET_DB().collection(TODOLIST_COLLECTION_NAME).findOne({
      _id: new ObjectId(id)
    })
    return result
  } catch (error) {
    throw new Error(error)
  }
}

const updateBoardId = async (board) => {
  try {
    const result = await GET_DB().collection(TODOLIST_COLLECTION_NAME).findOneAndUpdate(
      { _id: new ObjectId(board.todoListId) },
      { $set: { boardId: new ObjectId(board._id) } },
      { returnDocument: 'after' }
    )
    return result
  } catch (error) { throw new Error(error) }
}

const deleteOneById = async (postId) => {
  try {
    const result = await GET_DB().collection(TODOLIST_COLLECTION_NAME).deleteOne({ _id: new ObjectId(postId) })
    return result
  } catch (error) { throw new Error(error) }
}

const findOneByUserId = async (id) => {
  try {
    const result = await GET_DB().collection(TODOLIST_COLLECTION_NAME).findOne({
      userId: new ObjectId(id)
    })
    return result
  } catch (error) {
    throw new Error(error)
  }
}


export const todoListModel = {
  TODOLIST_COLLECTION_NAME,
  createNew,
  findOneById,
  updateBoardId,
  deleteOneById,
  findOneByUserId
}