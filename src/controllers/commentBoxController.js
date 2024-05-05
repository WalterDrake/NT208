import { StatusCodes } from 'http-status-codes'
import { cboxService } from '~/services/commentBoxService'


const createNew = async (req, res, next) => {
  try {
    const createdpost = await cboxService.createNew(req.body)

    // Có kết quả thì trả về phía Client
    res.status(StatusCodes.CREATED).json(createdpost)
  } catch (error) {
    next(error)
  }
}

const getDetails = async (req, res, next) => {
  try {
    const item = await cboxService.getDetails()
    res.status(StatusCodes.OK).json(item)
  } catch (error) {
    next(error)
  }
}

const findOneById = async (req, res, next) => {
  try {
    const itemId = req.params.id
    const item = await cboxService.findOneById(itemId)
    res.status(StatusCodes.OK).json(item)
  } catch (error) {
    next(error)
  }
}

export const cboxController = {
  createNew,
  getDetails,
  findOneById
}
