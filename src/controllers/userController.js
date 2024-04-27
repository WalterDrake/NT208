import { StatusCodes } from "http-status-codes";
import { userService } from "../services/userService";
import { userModel } from "~/models/userModel";
import { ObjectId } from "mongodb";

//-Đăng ký Sinh viên

const createNew = async (req, res, next) => {
  try {
    // console.log('req.body: ', req.body)
    // console.log('req.query: ', req.query)
    // console.log('req.params: ', req.params)
    // console.log('req.files: ', req.files)
    // console.log('req.cookies: ', req.cookies)
    // console.log('req.jwtDecoded: ', req.jwtDecoded)

    // Điều hướng dữ liệu sang tầng Service
    const createdUser = await userService.createNew(req.body);
    if (createdUser == null) {
      res.status(StatusCodes.BAD_REQUEST).json("Đã tồn tại");
      return;
    }
    // Có kết quả thì trả về phía Client
    res.status(StatusCodes.CREATED).json(createdUser);
  } catch (error) {
    next(error);
  }
};
const findOneById = async (req, res, next) => {
  const findUser = await userModel.findOneById(req.params);
};

const getDetails = async (req, res, next) => {
  try {
    const userId = req.params.id;
    console.log(userId);
    const user = await userService.getDetails(new ObjectId(userId));
    res.status(StatusCodes.OK).json(user);
  } catch (error) {
    next(error);
  }
};

const getDetailsAll = async (req, res, next) => {
  try {
    const user = await userService.getDetailsAll();
    res.status(StatusCodes.OK).json(user);
  } catch (error) {
    next(error);
  }
};

const getIds = async (req, res, next) => {
  try {
    const mssv = req.params.mssv;
    const user = await userModel.getIds(mssv);
    res.status(StatusCodes.OK).json(user);
  } catch (error) {
    next(error);
  }
};

const checkExist = async (req, res, next) => {
  try {
    const user = await userService.checkExist(
      req.params.email,
      req.params.password
    );
    res.status(StatusCodes.OK).json(user);
  } catch (error) {
    next(error);
  }
};
export const userController = {
  createNew,
  getDetails,
  getDetailsAll,
  getIds,
  checkExist,
};
