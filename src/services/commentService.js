/* eslint-disable no-useless-catch */
import ApiError from '~/utils/ApiError'
import { StatusCodes } from 'http-status-codes'
import { cloneDeep } from 'lodash'
import { ObjectId } from 'mongodb'
import { commentModel } from '~/models/Monhoc/commentModel'
import { cboxModel } from '~/models/Monhoc/commentboxModel'
const createNew = async (reqBody) => {
  try {
    const newComment = {
      ...reqBody
    }
    const createdComment = await commentModel.createNew(newComment)
    await cboxModel.pushToListComment(newComment.cBoxId, createdComment.insertedId)

    const getNewComment = await commentModel.findOneById(createdComment.insertedId)
    // Trả kết quả về, trong Service luôn phải có return
    return getNewComment
  } catch (error) {
    throw error
  }
}

const findOneById = async (itemId) => {
  try {
    const item = await commentModel.findOneById(new ObjectId(itemId))
    if (!item) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'comment not found!')
    }
    const resItem = cloneDeep(item)
    return resItem
  } catch (error) {
    throw error
  }
}

const update = async (commentId, reqBody) => {
  try {
    const updateData = {
      ...reqBody
    }
    const updatedMessage = await commentModel.update(commentId, updateData)

    return updatedMessage
  } catch (error) { throw error }
}

const deleteMessage = async (commentId) => {
  try {
    const targetMessage = await commentModel.findOneById(commentId)

    if (!targetMessage) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'Message not found!')
    }

    await cboxModel.pullToListComment(targetMessage)
    await commentModel.deleteOneById(commentId)

    return { deleteResult: 'Message deleted successfully!' }
  } catch (error) { throw error }
}

export const commentService = {
  createNew,
  findOneById,
  update,
  deleteMessage
}
