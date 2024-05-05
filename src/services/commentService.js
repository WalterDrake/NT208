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
    await cboxModel.pushToListComment(newComment.commentBoxId, createdComment.insertedId)

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

export const commentService = {
  createNew,
  findOneById
}
