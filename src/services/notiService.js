import { slugify } from "~/utils/formatters";
import ApiError from "~/utils/ApiError";
import { StatusCodes } from "http-status-codes";
import { cloneDeep } from "lodash";
import { ObjectId } from "mongodb";
import { postModel } from "~/models/Khoahoc/postModel";
import { notiModel } from "~/models/Khoahoc/notiModel";

const createNew = async (reqBody) => {
  try {
    const newItem = {
      ...reqBody,
    };

    const createditem = await notiModel.createNew(newItem);

    const getNewitem = await notiModel.findOneById(createditem.insertedId);
    // Trả kết quả về, trong Service luôn phải có return
    return getNewitem;
  } catch (error) {
    throw error;
  }
};

const getDetails = async (itemId) => {
  try {
    const item = await notiModel.getDetails(new ObjectId(itemId));
    if (!item) {
      throw new ApiError(StatusCodes.NOT_FOUND, "NOTI not found!");
    }
    const resItem = cloneDeep(item);
    return resItem;
  } catch (error) {
    throw error;
  }
};
const updateNoti = async (postId, reqBody) => {
  try {
    const updateData = {
      ...reqBody,
      updatedAt: Date.now(),
    };
    const updatedItem = await notiModel.updateNoti(postId, updateData);

    return updatedItem;
  } catch (error) {
    throw error;
  }
};

export const notiService = {
  createNew,
  getDetails,
  updateNoti,
};
