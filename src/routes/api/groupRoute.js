import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { groupController } from '~/controllers/groupController'
const Router = express.Router()

Router.route('/')
  .get((req, res) => {
    res.status(StatusCodes.OK).json({ message: 'GET: API get groups.' })
  })
  .post(groupController.createNew)

Router.route('/:id') // id of group
  .put(groupController.update)
  .delete(groupController.deleteGroup)
Router.route('/:id/getall')
  .get(groupController.getAll)
Router.route('/:id/getpublic')
  .get(groupController.getGroupOwnByTeacher)
Router.route('/:id/getprivate')
  .get(groupController.getPrivate)
Router.route('/:id/join') //id user
  .post(groupController.joinGroup)

export const groupRoute = Router