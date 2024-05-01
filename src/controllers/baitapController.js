import { StatusCodes } from "http-status-codes";
import { baitapModel } from "~/models/Khoahoc/filebainopModel";
import { postModel } from "~/models/Khoahoc/postModel";
import { baitapService } from "~/services/baitapService";
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
    const createdbaitap = await baitapService.createNew(req.body);

    // Có kết quả thì trả về phía Client
    res.status(StatusCodes.CREATED).json(createdbaitap);
  } catch (error) {
    next(error);
  }
};

const getDetails = async (req, res, next) => {
  try {
    const itemId = req.params.id;
    const item = await baitapService.getDetails(itemId);
    res.status(StatusCodes.OK).json(item);
  } catch (error) {
    next(error);
  }
};

const updateBaitap = async (req, res, next) => {
  try {
    const itemId = req.params.id;
    const updatedItem = await baitapService.updateBaitap(itemId, req.body);

    res.status(StatusCodes.OK).json(updatedItem);
  } catch (error) {
    next(error);
  }
};
export const baitapController = {
  createNew,
  getDetails,
  updateBaitap,
};
