import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { postController } from '~/controllers/postController'
import { studyController } from '~/controllers/studyController'
import { postValidation } from '~/validations/postValidation'
import { studyValidation } from '~/validations/studyValidation'

const Router = express.Router()

Router.route('/')
  .get((req, res) => {
    res.status(StatusCodes.OK).json({ message: 'GET: API get list Study' })
  })
  .post(studyValidation.createNew, studyController.createNew)

Router.route('/:id')
  .get(studyController.getDetailsAll)
  .put(studyValidation.updateStudy, studyController.updateStudy)

Router.route('/get/All')
  .get(studyController.getDetailsAll)
  .put(studyValidation.updateStudy, studyController.updateStudy)

// API hỗ trợ việc di chuyển card giữa các column khác nhau trong một board

export const studyRoute = Router
