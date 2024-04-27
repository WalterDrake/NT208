import { StatusCodes } from "http-status-codes";
import { postModel } from "~/models/Khoahoc/postModel";
import { boardService } from "~/services/boardService";
import { itemService } from "~/services/itemService";
import { postService } from "~/services/postService";
import { videoService } from "~/services/videoService";

const createNew = async (req, res, next) => {
  try {
    // console.log('req.body: ', req.body)
    // console.log('req.query: ', req.query)
    // console.log('req.params: ', req.params)
    // console.log('req.files: ', req.files)
    // console.log('req.cookies: ', req.cookies)
    // console.log('req.jwtDecoded: ', req.jwtDecoded)
    // Điều hướng dữ liệu sang tầng Service
    const createdpost = await postService.createNew(req.body);

    // Có kết quả thì trả về phía Client
    res.status(StatusCodes.CREATED).json(createdpost);
  } catch (error) {
    next(error);
  }
};

const getDetails = async (req, res, next) => {
  try {
    const itemId = req.params.id;
    const item = await postService.getDetails(itemId);
    res.status(StatusCodes.OK).json(item);
  } catch (error) {
    next(error);
  }
};

const updatePost = async (req, res, next) => {
  try {
    const itemId = req.params.id;
    const updatedItem = await postService.updatePost(itemId, req.body);

    res.status(StatusCodes.OK).json(updatedItem);
  } catch (error) {
    next(error);
  }
};
export const postController = {
  createNew,
  getDetails,
  updatePost,
};
