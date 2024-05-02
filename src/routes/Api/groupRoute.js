import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { groupController } from '~/controllers/groupController'
const Router = express.Router()

Router.route('/')
  .get((req, res) => {
    res.status(StatusCodes.OK).json({ message: 'GET: API get groups.' })
  })
  .post(groupController.createNew)

Router.route('/:id')
  .put(groupController.update)
Router.route('/:id/getAll')
  .get(groupController.getAll)
// Router.route('/:id/getClass')
//   .get(groupController.getClass)
// Router.route('/:id/getPrivate')
//   .get(groupController.getPrivate)

export const groupRoute = Router