/* eslint-disable no-useless-catch */
import { groupModel } from '~/models/Hocnhom/groupModel'
import { teamBoxModel } from '~/models/Hocnhom/teamboxModel'
import ApiError from '~/utils/ApiError'
import { StatusCodes } from 'http-status-codes'
import { todoListService } from './todoListService'
import { chatRealTimeService } from './chatRealTimeService'
import { videoRealTimeService } from './videoRealTimeService'

const createNew = async (reqBody) => {
  // eslint-disable-next-line no-useless-catch
  try {
    // Handle data according to each project
    const newTeamBox = {
      ...reqBody
    }
    // Call model layer to save record into database
    const createdTeamBox = await teamBoxModel.createNew(newTeamBox)

    // Get chat list after calling (optional)
    const getNewTeamBox = await teamBoxModel.findOneById(createdTeamBox.insertedId)

    await groupModel.updateTeamBoxId(getNewTeamBox.groupId, getNewTeamBox._id)
    // Return result note: have to return in Service
    return getNewTeamBox
  } catch (error) { throw error }
}

const deleteTeamBox = async (teamBoxId) => {
  try {

    const targetTeamBox = await teamBoxModel.findOneById(teamBoxId)

    if (!targetTeamBox) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'ToDoList not found!')
    }

    if (targetTeamBox.todoListId)
    {
      await todoListService.deleteToDoList(targetTeamBox.todoListId)
    }
    if (targetTeamBox.chatRealTimeId)
    {
      await chatRealTimeService.deleteChatRealTime(targetTeamBox.chatRealTimeId)
    }
    if (targetTeamBox.videoRealTimeId)
    {
      await videoRealTimeService.deleteVideoRealTime(targetTeamBox.videoRealTimeId)
    }
    await teamBoxModel.deleteOneById(targetTeamBox._id)
    return { deleteResult: 'chatRealTime deleted successfully!' }
  } catch (error) { throw error }
}

export const teamBoxService ={
  createNew,
  deleteTeamBox
}