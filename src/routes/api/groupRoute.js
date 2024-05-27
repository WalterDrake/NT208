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
  .delete(groupController.deleteGroup)
Router.route('/:id/getall')
  .get(groupController.getAll)
Router.route('/:id/getpublic')
  .get(groupController.getGroupOwnByTeacher)
Router.route('/:id/getprivate')
  .get(groupController.getPrivate)
Router.route('/:id/join')
  .put(groupController.joinGroup)
Router.route('/:id/leave')
  .put(groupController.leaveGroup)
Router.route('/:code/getgroup') // get by code
  .get(groupController.getGroup)
Router.route('/:id/getAllgroupByAdmin') // get by id
  .get(groupController.getAllGroupByAdmin)
Router.route(':/id/getOwnGroup') // id teacher
  .get(groupController.getGroupByTeacherId)
export const groupRoute = Router