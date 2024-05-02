import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { studyController } from '~/controllers/studyController'
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

Router.route('/getAll')
  .get(studyController.getDetailsAll)

// Router.route('/tatca')
//   .get(studyController.getAll)
// Router.route('/danghoc')
//   .get(studyController.getLearning)
// Router.route('/hoanthanh')
//   .get(studyController.getFinished)

export const studyRoute = Router
