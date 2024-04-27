import { slugify } from "~/utils/formatters";
import ApiError from "~/utils/ApiError";
import { StatusCodes } from "http-status-codes";
import { cloneDeep } from "lodash";
import { ObjectId } from "mongodb";
import { postModel } from "~/models/Khoahoc/postModel";

const createNew = async (reqBody) => {
  try {
    const newItem = {
      ...reqBody,
    };

    const createditem = await postModel.createNew(newItem);

    const getNewitem = await postModel.findOneById(createditem.insertedId);
    // Trả kết quả về, trong Service luôn phải có return
    return getNewitem;
  } catch (error) {
    throw error;
  }
};

const getDetails = async (itemId) => {
  try {
    const item = await postModel.getDetails(new ObjectId(itemId));
    if (!item) {
      throw new ApiError(StatusCodes.NOT_FOUND, "Post not found!");
    }
    const resItem = cloneDeep(item);
    return resItem;
  } catch (error) {
    throw error;
  }
};
const updateVideo = async (postId, reqBody) => {
  try {
    const updateData = {
      ...reqBody,
      updatedAt: Date.now(),
    };
    const updatedItem = await postModel.update(postId, updateData);

    return updatedItem;
  } catch (error) {
    throw error;
  }
};

export const postService = {
  createNew,
  getDetails,
  updateVideo,
};
