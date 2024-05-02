/* eslint-disable no-useless-catch */

import { slugify } from '~/utils/formatters'
import { boardModel } from '~/models/Hocnhom/ToDoList/boardModel'
import ApiError from '~/utils/ApiError'
import { StatusCodes } from 'http-status-codes'
import { cloneDeep } from 'lodash'
import { columnModel } from '~/models/Hocnhom/ToDoList/columnModel'
import { cardModel } from '~/models/Hocnhom/ToDoList/cardModel'
import { todoListModel } from '~/models/Hocnhom/ToDoList/toDoListModel'

const createNew = async (reqBody) => {
  try {
    // Handle data according to each project
    const newBoard = {
      ...reqBody,
      slug: slugify(reqBody.title)
    }
    // Call model layer to save record into database
    const createdBoard = await boardModel.createNew(newBoard)

    // Get record board after calling (optional)
    const getNewBoard = await boardModel.findOneById(createdBoard.insertedId)

    if (getNewBoard)
    {
      await todoListModel.pushBoardList(getNewBoard)
    }
    // Return result; note: have to return in Service
    return getNewBoard
  } catch (error) { throw error }
}

const getDetails = async (boardId) => {
  try {
    const board = await boardModel.getDetails(boardId)
    if (!board) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'Board not found!')
    }

    // Deep Clone board create a new same board from board, dont affect to old board
    const resBoard = cloneDeep(board)

    // B2: give card to correct its column
    resBoard.columns.forEach(column => {
      column.cards = resBoard.cards.filter(card => card.columnId.equals(column._id))
    })

    // B3: Delete cards from resboard
    delete resBoard.cards

    return resBoard
  } catch (error) { throw error }
}

const update = async (boardId, reqBody) => {
  try {
    const updateData = {
      ...reqBody,
      updatedAt: Date.now()
    }
    const updatedBoard = await boardModel.update(boardId, updateData)

    return updatedBoard
  } catch (error) { throw error }
}

const moveCardToDifferentColumn = async (reqBody) => {
  try {
    // B1: Update array listCard of Column storage it (Hiểu bản chất là xóa cái _id của Card ra khỏi mảng)
    await columnModel.update(reqBody.prevColumnId, {
      listCard: reqBody.prevListCard,
      updatedAt: Date.now()
    })
    // B2: Update array listCard of new Column storage it (Hiểu bản chất là thêm _id của Card vào mảng)
    await columnModel.update(reqBody.nextColumnId, {
      listCard: reqBody.nextListCard,
      updatedAt: Date.now()
    })
    // B3: Update new comlumnId field of card is draged
    await cardModel.update(reqBody.currentCardId, {
      columnId: reqBody.nextColumnId
    })

    return { updateResult: 'Successfully!' }
  } catch (error) { throw error }
}

const deleteBoard = async (boardId) => {
  try {
    const targetBoard = await boardModel.findOneById(boardId)

    if (!targetBoard) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'Board not found!')
    }
    const columnIds = targetBoard.listColumn
    for (const columnId of columnIds)
    {
      await cardModel.deleteManyByColumnId(columnId)
    }
    await columnModel.deleteManyByBoardId(boardId)
    await boardModel.deleteOneById(boardId)

    return { deleteResult: 'Board deleted successfully!' }
  } catch (error) { throw error }
}

export const boardService = {
  createNew,
  getDetails,
  update,
  moveCardToDifferentColumn,
  deleteBoard
}

