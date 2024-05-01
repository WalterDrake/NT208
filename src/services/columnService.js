/* eslint-disable no-useless-catch */

import { columnModel } from '~/models/Hocnhom/ToDoList/columnModel'
import ApiError from '~/utils/ApiError'
import { StatusCodes } from 'http-status-codes'
import { boardModel } from '~/models/Hocnhom/ToDoList/boardModel'
import { cardModel } from '~/models/Hocnhom/ToDoList/cardModel'

const createNew = async (reqBody) => {
  try {
    // Handle data according to each project
    const newColumn = {
      ...reqBody
    }
    // Call model layer to save record into database
    const createdColumn = await columnModel.createNew(newColumn)

    // Get record board after calling (optional)
    const getNewColumn = await columnModel.findOneById(createdColumn.insertedId)

    if (getNewColumn) {
      // Xử lý cấu trúc data ở đây trước khi trả dữ liệu về
      getNewColumn.card = []

      // Update array listColumn in collection boards
      await boardModel.pushListColumn(getNewColumn)
    }

    // Return result; note: have to return in Service
    return getNewColumn
  } catch (error) { throw error }
}

const update = async (columnId, reqBody) => {
  try {
    const updateData = {
      ...reqBody,
      updatedAt: Date.now()
    }
    const updatedColumn = await columnModel.update(columnId, updateData)

    return updatedColumn
  } catch (error) { throw error }
}

const deleteItem = async (columnId) => {
  try {
    const targetColumn = await columnModel.findOneById(columnId)

    if (!targetColumn) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'Column not found!')
    }

    // delete Column
    await columnModel.deleteOneById(columnId)

    // delete all Cards of its Column
    await cardModel.deleteManyByColumnId(columnId)

    // delete columnId in listColumn of its Board
    await boardModel.pullListColumn(targetColumn)

    return { deleteResult: 'Column and its Cards deleted successfully!' }
  } catch (error) { throw error }
}


export const columnService = {
  createNew,
  update,
  deleteItem
}

