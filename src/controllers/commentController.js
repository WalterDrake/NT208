import { StatusCodes } from 'http-status-codes'
import { commentService } from '~/services/commentService'

const createNew = async (req, res, next) => {
  try {

    const createdcomment = await commentService.createNew(req.body)

    // Có kết quả thì trả về phía Client
    res.status(StatusCodes.CREATED).json(createdcomment)
  } catch (error) {
    next(error)
  }
}

const findOneById = async (req, res, next) => {
  try {
    const itemId = req.params.id
    const item = await commentService.findOneById(itemId)
    res.status(StatusCodes.OK).json(item)
  } catch (error) {
    next(error)
  }
}

const update = async (req, res, next) => {
  try {
    const messageId = req.params.id
    const updatedMessage = await commentService.update(messageId, req.body)

    res.status(StatusCodes.OK).json(updatedMessage)
  } catch (error) { next(error) }
}

const deleteMessage = async (req, res, next) => {
  try {
    const messageModelId = req.params.id
    const result = await commentService.deleteMessage(messageModelId)

    res.status(StatusCodes.OK).json(result)
  } catch (error) { next(error) }
}


export const commentController = {
  createNew,
  findOneById,
  update,
  deleteMessage
}
