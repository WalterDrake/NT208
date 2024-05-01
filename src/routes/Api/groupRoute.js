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

export const groupRoute = Router