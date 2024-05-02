import { StatusCodes } from 'http-status-codes'
import { groupService } from '~/services/groupService'

const createNew = async (req, res, next) => {

  try {

    // Direct data to Service
    const createdGroup = await groupService.createNew(req.body)

    // Return response to Client
    res.status(StatusCodes.CREATED).json({ createdGroup })
  } catch (error) {
    next(error)
  }
}

const update = async (req, res, next) => {
  try {
    const groupId = req.params.id
    const updatedGroup = await groupService.update(groupId, req.body)

    res.status(StatusCodes.OK).json(updatedGroup)
  } catch (error) { next(error) }
}

const getAll = async (req, res, next) => {
  try {
    const userId = req.params.id
    const getAllGroup = await groupService.getAll(userId)

    res.status(StatusCodes.OK).json(getAllGroup)
  } catch (error) { next(error) }
}

export const groupController = {
  createNew,
  update,
  getAll
}

