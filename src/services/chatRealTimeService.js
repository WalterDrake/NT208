import ApiError from '~/utils/ApiError'
import { StatusCodes } from 'http-status-codes'
import { chatRealTimeModel } from '~/models/chatRealTimeModel'

const createNew = async (reqBody) => {
  // eslint-disable-next-line no-useless-catch
  try {
    // Handle data according to each project
    const newChat = {
      ...reqBody
    }
    // Call model layer to save record into database
    const createdChat = await chatRealTimeModel.createNew(newChat)

    // Get record board after calling (optional)
    const getNewChat = await chatRealTimeModel.findOneById(createdChat.insertedId)

    // Return result; note: have to return in Service
    return getNewChat
  } catch (error) { throw error }
}
export const chatRealTimeService ={
  createNew
}