/* eslint-disable no-useless-catch */
import ApiError from '~/utils/ApiError'
import { StatusCodes } from 'http-status-codes'
import { cloneDeep } from 'lodash'
import { studyModel } from '~/models/Monhoc/studyModel'

const createNew = async (reqBody) => {
  try {
    const newItem = {
      ...reqBody
    }

    const createditem = await studyModel.createNew(newItem)

    const getNewitem = await studyModel.findOneById(createditem.insertedId)
    // Trả kết quả về, trong Service luôn phải có return
    return getNewitem
  } catch (error) {
    throw error
  }
}

const getDetailsAll = async () => {
  try {
    const item = await studyModel.getDetails()
    if (!item) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'Study not found!')
    }
    const resItem = cloneDeep(item)
    return resItem
  } catch (error) {
    throw error
  }
}
const updateStudy = async (postId, reqBody) => {
  try {
    const updateData = {
      ...reqBody,
      updatedAt: Date.now()
    }
    const updatedItem = await studyModel.updateStudy(postId, updateData)

    return updatedItem
  } catch (error) {
    throw error
  }
}

export const studyService = {
  createNew,
  getDetailsAll,
  updateStudy
}
