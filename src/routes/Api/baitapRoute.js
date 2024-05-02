import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { baitapController } from '~/controllers/baitapController'
import { baitapValidation } from '~/validations/baitapValidation'

const Router = express.Router()

Router.route('/')
  .get((req, res) => {
    res.status(StatusCodes.OK).json({ message: 'GET: API get list Baitap' })
  })
  .post(baitapValidation.createNew, baitapController.createNew)

Router.route('/:id')
  .get(baitapController.getDetails)
  .put(baitapValidation.updateBaitap, baitapController.updateBaitap)

// API hỗ trợ việc di chuyển card giữa các column khác nhau trong một board

export const baitapRoute = Router
