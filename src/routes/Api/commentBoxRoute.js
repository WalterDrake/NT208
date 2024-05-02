import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { cboxController } from '~/controllers/commentBoxController'
import { postController } from '~/controllers/postController'
import { cboxModel } from '~/models/Monhoc/commentboxModel'
import { cboxValidation } from '~/validations/commentBoxValidation'
import { postValidation } from '~/validations/postValidation'

const Router = express.Router()

Router.route('/')
  .get((req, res) => {
    res.status(StatusCodes.OK).json({ message: 'GET: API get list cBox' })
  })
  .post(cboxValidation.createNew, cboxController.createNew)

Router.route('/:id').get(cboxController.findOneById)

Router.route('/get/All').get(cboxController.getDetails)

// API hỗ trợ việc di chuyển card giữa các column khác nhau trong một board

export const cboxRoute = Router
