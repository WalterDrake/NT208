import { slugify } from "~/utils/formatters";
import ApiError from "~/utils/ApiError";
import { StatusCodes } from "http-status-codes";
import { cloneDeep } from "lodash";
import { ObjectId } from "mongodb";
import { postModel } from "~/models/Khoahoc/postModel";
import { baitapModel } from "~/models/Khoahoc/filebainopModel";

const createNew = async (reqBody) => {
  try {
    const newItem = {
      ...reqBody,
    };

    const createditem = await baitapModel.createNew(newItem);

    const getNewitem = await baitapModel.findOneById(createditem.insertedId);
    // Trả kết quả về, trong Service luôn phải có return
    return getNewitem;
  } catch (error) {
    throw error;
  }
};

const getDetails = async (baitapId) => {
  try {
    const item = await postModel.getDetails(new ObjectId(baitapId));
    if (!item) {
      throw new ApiError(StatusCodes.NOT_FOUND, "Bai tap not found!");
    }
    const resItem = cloneDeep(item);
    return resItem;
  } catch (error) {
    throw error;
  }
};
const updateBaitap = async (baitapId, reqBody) => {
  try {
    const updateData = {
      ...reqBody,
      updatedAt: Date.now(),
    };
    const updatedItem = await postModel.update(baitapId, updateData);

    return updatedItem;
  } catch (error) {
    throw error;
  }
};

export const baitapService = {
  createNew,
  getDetails,
  updateBaitap,
};
