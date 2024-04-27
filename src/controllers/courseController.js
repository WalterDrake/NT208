import { StatusCodes } from "http-status-codes";
import { courseService } from "~/services/courseService";

const createNew = async (req, res, next) => {
  try {
    // console.log('req.body: ', req.body)
    // console.log('req.query: ', req.query)
    // console.log('req.params: ', req.params)
    // console.log('req.files: ', req.files)
    // console.log('req.cookies: ', req.cookies)
    // console.log('req.jwtDecoded: ', req.jwtDecoded)

    // Điều hướng dữ liệu sang tầng Service
    const createdCourse = await courseService.createNew(req.body);

    // Có kết quả thì trả về phía Client
    res.status(StatusCodes.CREATED).json(createdCourse);
  } catch (error) {
    next(error);
  }
};

const getDetails = async (req, res, next) => {
  try {
    const boardId = req.params.id;
    const board = await boardService.getDetails(boardId);
    res.status(StatusCodes.OK).json(board);
  } catch (error) {
    next(error);
  }
};

const updateCourse = async (req, res, next) => {
  try {
    const courseId = req.params.id;
    const updatedCourse = await courseService.updateCourse(courseId, req.body);

    res.status(StatusCodes.OK).json(updatedCourse);
  } catch (error) {
    next(error);
  }
};

const moveCardToDifferentColumn = async (req, res, next) => {
  try {
    const result = await boardService.moveCardToDifferentColumn(req.body);

    res.status(StatusCodes.OK).json(result);
  } catch (error) {
    next(error);
  }
};

export const courseController = {
  createNew,
  getDetails,
  updateCourse,
  moveCardToDifferentColumn,
};
