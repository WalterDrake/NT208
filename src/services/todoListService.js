/* eslint-disable no-useless-catch */
import { todoListModel } from '~/models/Hocnhom/ToDoList/toDoListModel'
import ApiError from '~/utils/ApiError'
import { StatusCodes } from 'http-status-codes'
import { boardModel } from '~/models/Hocnhom/ToDoList/boardModel'
import { boardService } from './boardService'


const createNew = async (reqBody) => {
  // eslint-disable-next-line no-useless-catch
  try {
    // Handle data according to each project
    const newTodoList = {
      ...reqBody
    }
    delete newTodoList.title
    delete newTodoList.description
    // Call model layer to save record into database
    const createdTodoList = await todoListModel.createNew(newTodoList)
    const newDataBoard = {
      ...reqBody,
      todoListId: String(createdTodoList.insertedId)
    }
    const getBoard = await boardService.createNew(newDataBoard)

    await todoListModel.updateBoardId(getBoard)
    // Get record board after calling (optional)
    const getNewBoard = await boardModel.findOneById(getBoard._id)

    // Return result note: have to return in Service
    return getNewBoard
  } catch (error) { throw error }
}

const deleteToDoList = async (todoListId) => {
  try {
    const targetToDoList = await todoListModel.findOneById(todoListId)

    if (!targetToDoList) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'ToDoList not found!')
    }
    const boardId = targetToDoList.boardId
    await boardService.deleteBoard(boardId)
    await todoListModel.deleteOneById(todoListId)
    return { deleteResult: 'ToDoList deleted successfully!' }
  } catch (error) { throw error }
}

const getTodoList = async (userId) => {
  try {
    const targetToDoList = await todoListModel.findOneByUserId(userId)

    if (!targetToDoList) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'ToDoList not found!')
    }
    return targetToDoList
  } catch (error) { throw error }
}
export const todoListService =
{
  createNew,
  deleteToDoList,
  getTodoList
}