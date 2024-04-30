import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { postValidation } from '~/validations/postValidation'
import { postController } from '~/controllers/postController'
const Router = express.Router()

Router.route('/')
  .get((req, res) => {
    res.status(StatusCodes.OK).json({ message: 'GET: API get post.' })
  })
  .post(postValidation.createNew, postController.createNew)

Router.route('/:id')
  .put(postValidation.update, postController.update)
  .delete(postValidation.deletePost, postController.deletePost)
export const postRoute = Router