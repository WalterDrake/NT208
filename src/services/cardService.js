import { cardModel } from '~/models/Hocnhom/ToDoList/cardModel'
import { columnModel } from '~/models/Hocnhom/ToDoList/columnModel'
import { StatusCodes } from 'http-status-codes'
import ApiError from '~/utils/ApiError'

const createNew = async (reqBody) => {
  try {
    // Xử lý logic dữ liệu tùy đặc thù dự án
    const newCard = {
      ...reqBody
    }
    const createdCard = await cardModel.createNew(newCard)
    const getNewCard = await cardModel.findOneById(createdCard.insertedId)

    if (getNewCard) {
      // Cập nhật mảng cardOrderIds trong collection columns
      await columnModel.pushCardOrderIds(getNewCard)
    }

    return getNewCard
  } catch (error) {
    throw error
  }
}

const deleteItem = async (cardId) => {
  try {
    const targetCard = await cardModel.findOneById(cardId)

    if (!targetCard) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'Card not found!')
    }

    // Xóa Column
    await cardModel.deleteOneById(cardId)

    // Xóa toàn bộ Cards thuộc cái Column trên
    await columnModel.pusllCardOrderIds(targetCard)

    return { deleteResult: 'Cards deleted successfully!' }
  } catch (error) {
    throw error
  }
}

export const cardService = {
  createNew,
  deleteItem
}
