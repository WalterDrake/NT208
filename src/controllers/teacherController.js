import { StatusCodes } from "http-status-codes";
import { userService } from "../services/userService";
import { studentModel, userModel } from "~/models/studentModel";
import { ObjectId } from "mongodb";
import { GET_DB } from "~/config/mongodb";
import { courseModel } from "~/models/Khoahoc/courseModel";
import { json } from "express";
import { teacherModel } from "~/models/teacherModel";

const TeacherRegister = async (req, res, next) => {
  try {
    const createdUser = await teacherModel.createNew(req.body);
    if (createdUser == null) {
      res.status(StatusCodes.BAD_REQUEST).json("Đã tồn tại");
    }
    // Có kết quả thì trả về phía Client
    res.status(StatusCodes.OK).json(createdUser);
  } catch (error) {
    next(error);
  }
};

const getTeacherDetails = async (req, res, next) => {
  try {
    const userId = req.params.id;
    console.log(userId);
    const user = await userService.getDetails(new ObjectId(userId));
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

const TeacherLogin = async (req, res, next) => {
  try {
    const user = await teacherModel.checkExist(
      req.params.email,
      req.params.password
    );
    res.status(StatusCodes.OK).json(user);
  } catch (error) {
    next(error);
  }
};

export const teacherController = {
  TeacherRegister,
  getTeacherDetails,
  TeacherLogin,
  getIds,
};
