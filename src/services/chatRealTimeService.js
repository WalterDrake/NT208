/* eslint-disable no-useless-catch */
import { chatRealTimeModel } from '~/models/Hocnhom/ChatRealTime/chatRealTimeModel'
import { groupModel } from '~/models/Hocnhom/groupModel'
import { teamBoxModel } from '~/models/Hocnhom/teamboxModel'
import ApiError from '~/utils/ApiError'
import { StatusCodes } from 'http-status-codes'
import { messageModel } from '~/models/Hocnhom/ChatRealTime/messageModel'

const createNew = async (reqBody) => {
  // eslint-disable-next-line no-useless-catch
  try {
    // Handle data according to each project
    const newChat = {
      ...reqBody
    }
    // Call model layer to save record into database
    const createdChat = await chatRealTimeModel.createNew(newChat)

    // Get chat list after calling (optional)
    const getNewChat = await chatRealTimeModel.findOneById(createdChat.insertedId)

    const memListIds = groupModel.listMem
    if (memListIds)
    {
      for (const memListId of memListIds)
      {
        await chatRealTimeModel.pushMemList(memListId)
      }
    }

    await teamBoxModel.updateChatRealTimeId(getNewChat.teamBoxId, getNewChat._id)
    // Return result; note: have to return in Service
    return getNewChat
  } catch (error) { throw error }
}

const deleteChatRealTime = async (chatRealTimeId) => {
  try {
    const targetChatRealTime = await chatRealTimeModel.findOneById(chatRealTimeId)

    if (!targetChatRealTime) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'chatRealTime not found!')
    }
    const messageIds = targetChatRealTime.messageModel
    for (const messageId of messageIds)
    {
      await messageModel.deleteOneById(messageId)
    }
    await chatRealTimeModel.deleteOneById(targetChatRealTime._id)
    return { deleteResult: 'chatRealTime deleted successfully!' }
  } catch (error) { throw error }
}

export const chatRealTimeService ={
  createNew,
  deleteChatRealTime
}