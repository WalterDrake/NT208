/* eslint-disable no-useless-catch */
import { messageModel } from '~/models/messageModel'
import ApiError from '~/utils/ApiError'
import { StatusCodes } from 'http-status-codes'


const createNew = async (reqBody) => {
  // eslint-disable-next-line no-useless-catch
  try {
    // Handle data according to each project
    const newMessage = {
      ...reqBody
    }
    // Call model layer to save record into database
    const createdMessage = await messageModel.createNew(newMessage)

    // Get record board after calling (optional)
    const getNewMessage = await messageModel.findOneById(createdMessage.insertedId)

    // Return result; note: have to return in Service
    return getNewMessage
  } catch (error) { throw error }
}

const update = async (messageId, reqBody) => {
  try {
    const updateData = {
      ...reqBody
    }
    const updatedMessage = await messageModel.update(messageId, updateData)

    return updatedMessage
  } catch (error) { throw error }
}

const deleteMessage = async (messageId) => {
  try {
    const targetMessage = await messageModel.findOneById(messageId)

    if (!targetMessage) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'Message not found!')
    }

    await messageModel.deleteOneById(messageId)

    return { deleteResult: 'Message deleted successfully!' }
  } catch (error) { throw error }
}

export const messageModelService =
{
  createNew,
  update,
  deleteMessage
}