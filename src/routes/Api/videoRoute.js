import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { videoController } from '~/controllers/videoController'
import { videoValidation } from '~/validations/videoValidation'

const Router = express.Router()

Router.route('/')
  .get((req, res) => {
    res.status(StatusCodes.OK).json({ message: 'GET: API get list video' })
  })
  .post(videoValidation.createNew, videoController.createNew)

Router.route('/:id')
  .get(videoController.getDetails)
  .put(videoValidation.updateItem, videoController.updateVideo)

// API hỗ trợ việc di chuyển card giữa các column khác nhau trong một board

export const videoRoute = Router
