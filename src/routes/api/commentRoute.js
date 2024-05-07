import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { commentController } from '~/controllers/commentController'
import { commentValidation } from '~/validations/commentValidation'

const Router = express.Router()

Router.route('/')
  .get((req, res) => {
    res.status(StatusCodes.OK).json({ message: 'GET: API get list comemnt' })
  })
  .post(commentValidation.createNew, commentController.createNew)

Router.route('/:id')
  .get(commentController.findOneById)
  .put(commentController.update)
  .delete(commentController.deleteMessage)

// API hỗ trợ việc di chuyển card giữa các column khác nhau trong một board

export const commentRoute = Router
