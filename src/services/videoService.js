import { slugify } from "~/utils/formatters";
import ApiError from "~/utils/ApiError";
import { StatusCodes } from "http-status-codes";
import { cloneDeep } from "lodash";
import { ObjectId } from "mongodb";
import { videoModel } from "~/models/Khoahoc/videoModel";

const createNew = async (reqBody) => {
  try {
    const newItem = {
      ...reqBody,
    };

    const createdvideo = await videoModel.createNew(newItem);

    const getNewivideo = await videoModel.findOneById(createdvideo.insertedId);
    // Trả kết quả về, trong Service luôn phải có return
    return getNewivideo;
  } catch (error) {
    throw error;
  }
};

const getDetails = async (itemId) => {
  try {
    const item = await videoModel.getDetails(new ObjectId(itemId));
    if (!item) {
      throw new ApiError(StatusCodes.NOT_FOUND, "Videos not found!");
    }
    const resItem = cloneDeep(item);
    return resItem;
  } catch (error) {
    throw error;
  }
};
const updateVideo = async (itemId, reqBody) => {
  try {
    const updateData = {
      ...reqBody,
      updatedAt: Date.now(),
    };
    const updatedItem = await videoModel.updateVideo(itemId, updateData);

    return updatedItem;
  } catch (error) {
    throw error;
  }
};

export const videoService = {
  createNew,
  getDetails,
  updateVideo,
};
