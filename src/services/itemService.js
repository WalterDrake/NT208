import { slugify } from "~/utils/formatters";
import ApiError from "~/utils/ApiError";
import { StatusCodes } from "http-status-codes";
import { cloneDeep } from "lodash";
import { ObjectId } from "mongodb";
import { itemModel } from "~/models/Khoahoc/itemModel";

const createNew = async (reqBody) => {
  try {
    const newItem = {
      ...reqBody,
    };

    const createditem = await itemModel.createNew(newItem);

    const getNewitem = await itemModel.findOneById(createditem.insertedId);
    // Trả kết quả về, trong Service luôn phải có return
    return getNewitem;
  } catch (error) {
    throw error;
  }
};

const getDetails = async (itemId) => {
  try {
    const item = await itemModel.getDetails(new ObjectId(itemId));
    if (!item) {
      throw new ApiError(StatusCodes.NOT_FOUND, "Item not found!");
    }
    const resItem = cloneDeep(item);
    return resItem;
  } catch (error) {
    throw error;
  }
};
const updateItem = async (itemId, reqBody) => {
  try {
    const updateData = {
      ...reqBody,
      updatedAt: Date.now(),
    };
    const updatedItem = await itemModel.update(itemId, updateData);

    return updatedBoard;
  } catch (error) {
    throw error;
  }
};

export const itemService = {
  createNew,
  getDetails,
  updateItem,
};
