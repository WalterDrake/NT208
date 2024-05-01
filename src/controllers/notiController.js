import { StatusCodes } from "http-status-codes";
import { notiModel } from "~/models/Khoahoc/notiModel";
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
    const createdpost = await notiModel.createNew(req.body);

    // Có kết quả thì trả về phía Client
    res.status(StatusCodes.CREATED).json(createdpost);
  } catch (error) {
    next(error);
  }
};

const getDetails = async (req, res, next) => {
  try {
    const itemId = req.params.id;
    const item = await notiModel.getDetails(itemId);
    res.status(StatusCodes.OK).json(item);
  } catch (error) {
    next(error);
  }
};

const updateNoti = async (req, res, next) => {
  try {
    const itemId = req.params.id;
    const updatedItem = await notiModel.updateNoti(itemId, req.body);

    res.status(StatusCodes.OK).json(updatedItem);
  } catch (error) {
    next(error);
  }
};
export const notiController = {
  createNew,
  getDetails,
  updateNoti,
};
