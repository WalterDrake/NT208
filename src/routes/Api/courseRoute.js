import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { courseController } from '~/controllers/courseController'
import { courseValidation } from '~/validations/courseValidation'

const Router = express.Router()

/// Chỗ này viết các API cụ thể từng vai trò nè
Router.route('/')
  .get((req, res) => {
    res.status(StatusCodes.OK).json({ message: 'GET: API get list Course' })
  })
  .post(courseController.createNew)

Router.route('/:id')
  .get()
  .put(courseValidation.updateCourse, courseController.updateCourse)

export const courseRoute = Router
