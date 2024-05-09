/* eslint-disable no-useless-catch */
import { videoRealTimeModel } from '~/models/Hocnhom/videoRealTimeModel'
import { teamBoxModel } from '~/models/Hocnhom/teamboxModel'
import ApiError from '~/utils/ApiError'
import { StatusCodes } from 'http-status-codes'

const createNew = async (reqBody) => {
  // eslint-disable-next-line no-useless-catch
  try {
    // Handle data according to each project
    const newVideo = {
      ...reqBody
    }
    // Call model layer to save record into database
    const createdVideo = await videoRealTimeModel.createNew(newVideo)

    // Get chat list after calling (optional)
    const getNewVideo = await videoRealTimeModel.findOneById(createdVideo.insertedId)

    await teamBoxModel.updateVideoRealTimeId(getNewVideo.teamBoxId, getNewVideo._id)
    // Return result note: have to return in Service
    return getNewVideo
  } catch (error) { throw error }
}

const deleteVideoRealTime = async (videoRealTimeId) => {
  try {
    const targetVideoRealTime = await videoRealTimeModel.findOneById(videoRealTimeId)

    if (!targetVideoRealTime) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'VideoRealTime not found!')
    }
    await videoRealTimeModel.deleteOneById(targetVideoRealTime._id)
    return { deleteResult: 'VideoRealTime deleted successfully!' }
  } catch (error) { throw error }
}

export const videoRealTimeService ={
  createNew,
  deleteVideoRealTime
}