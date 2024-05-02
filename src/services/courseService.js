import { slugify } from "~/utils/formatters";
import ApiError from "~/utils/ApiError";
import { StatusCodes } from "http-status-codes";
import { cloneDeep } from "lodash";
import { courseModel } from "~/models/Khoahoc/courseModel";
import { userService } from "./userService";

const getDetails = async (courseId) => {
  try {
    const course = await courseModel.findOneById(courseId);
    if (!course) {
      throw new ApiError(StatusCodes.NOT_FOUND, "Course not found!");
    }
    return course;
  } catch (error) {
    throw error;
  }
};

const getDetailsAll = async () => {
  try {
    const course = await courseModel.getDetailsAll();
    if (!course) {
      throw new ApiError(StatusCodes.NOT_FOUND, "Course not found!");
    }
    return course;
  } catch (error) {
    throw error;
  }
};

const createNew = async (req, res, next) => {
  try {
    const newItem = {
      ...req.body,
    };
    const existcourse = await courseModel.findOne(newItem);
    console.log(existcourse);
    if (existcourse) {
      res
        .status(StatusCodes.FAILED_DEPENDENCY)
        .send({ message: "Course is already" });
    } else {
      const createdcourse = await courseModel.createNew(newItem);
      const getNewcourse = await courseModel.findOneById(
        createdcourse.insertedId
      );
      res.status(StatusCodes.OK).json(getNewcourse);
    }
  } catch (error) {
    throw error;
  }
};

const updateCourse = async (courseId, reqBody) => {
  try {
    const updateData = {
      ...reqBody,
      updatedAt: Date.now(),
    };
    const updatedCourse = await courseModel.updateCourse(courseId, updateData);

    return updatedCourse;
  } catch (error) {
    throw error;
  }
};

// Lay lop tu Id cua Student
const getCoursebyUser = async (userId) => {
  try {
    const user = await userService.getDetails(userId);
    return user.course;
  } catch (error) {
    throw error;
  }
};

export const courseService = {
  getDetails,
  updateCourse,
  getDetailsAll,
  createNew,
  getCoursebyUser,
};
