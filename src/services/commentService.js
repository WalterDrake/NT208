import { slugify } from '~/utils/formatters'
import ApiError from '~/utils/ApiError'
import { StatusCodes } from 'http-status-codes'
import { cloneDeep } from 'lodash'
import { ObjectId } from 'mongodb'
import { postModel } from '~/models/Khoahoc/postModel'
import { cboxModel } from '~/models/Monhoc/commentboxModel'
import { commentModel } from '~/models/Monhoc/commentModel'

const createNew = async (reqBody) => {
  try {
    const newItem = {
      ...reqBody,
    }

    const createditem = await commentModel.createNew(newItem)

    const getNewitem = await commentModel.findOneById(createditem.insertedId)
    // Trả kết quả về, trong Service luôn phải có return
    return getNewitem
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
  findOneById,
}
