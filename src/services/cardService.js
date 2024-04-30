/* eslint-disable no-useless-catch */

import { cardModel } from '~/models/cardModel'
import { columnModel } from '~/models/columnModel'
import ApiError from '~/utils/ApiError'
import { StatusCodes } from 'http-status-codes'

const createNew = async (reqBody) => {
  try {
    // Handle data according to each project
    const newCard = {
      ...reqBody
    }
    // Call model layer to save record into database
    const createdCard = await cardModel.createNew(newCard)

    // Get record board after calling (optional)
    const getNewCard = await cardModel.findOneById(createdCard.insertedId)

    if (getNewCard) {
      // Update cardOrderIds in collection columns
      await columnModel.pushListCard(getNewCard)
    }
    // Return result; note: have to return in Service
    return getNewCard
  } catch (error) { throw error }
}

const deleteCard = async (cardId) => {
  try {
    const targetCard = await cardModel.findOneById(cardId)

    if (!targetCard) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'Card not found!')
    }

    await cardModel.deleteCard(cardId)
    await columnModel.pullListCard(targetCard)

    return { deleteResult: 'Card deleted successfully!' }
  } catch (error) { throw error }
}


export const cardService = {
  createNew,
  deleteCard
}