import { StatusCodes } from 'http-status-codes'
import { cardService } from '~/services/cardService'

const createNew = async (req, res, next) => {

  try {

    // Direct data to Service
    const createdCard = await cardService.createNew(req.body)

    // Return response to Client
    res.status(StatusCodes.CREATED).json({ createdCard })
  } catch (error) {
    next(error)
  }
}
const getDetails = async (req, res, next) => {

  try {
    const cardId = req.params.id
    const Card = await cardService.getDetails(cardId)

    res.status(StatusCodes.OK).json({ Card })
  } catch (error) {
    next(error)
  }
}
const deleteCard = async (req, res, next) => {
  try {
    const cardId = req.params.id
    const result = await cardService.deleteCard(cardId)

    res.status(StatusCodes.OK).json(result)
  } catch (error) { next(error) }
}

export const cardController = {
  createNew,
  getDetails,
  deleteCard
}

