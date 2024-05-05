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

Router.route('/getall')
  .get(studyController.getAll)

Router.route('/:id') //id of study
  .get(studyController.getDetails)
  .put(studyValidation.updateStudy, studyController.updateStudy)


// Router.route('/learning')
//   .get(studyController.getLearning)
// Router.route('/hoanthanh')
//   .get(studyController.getFinished)

export const studyRoute = Router
