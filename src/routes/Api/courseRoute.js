import express from "express";
import { StatusCodes } from "http-status-codes";
import { courseController } from "~/controllers/courseController";
import { courseValidation } from "~/validations/courseValidation";

const Router = express.Router();

/// Chỗ này viết các API cụ thể từng vai trò nè
/////////////////////////////////////////////////////////////////
Router.route("/").get((req, res) => {
  res.status(StatusCodes.OK).json({ message: "GET: API get list Course" });
});

//Lấy API từ course
Router.route("/CourseCreate").post(courseController.createNewbyTeacher);
Router.route("/CourseList/:id").get(courseController.getDetailsAllbyTeacher);
Router.route("/Course/:id").get(courseController.getDetailsCourse);
Router.route("/Course/Students/:id").get(courseController.getSclassStudents);
Router.route("/DeleteCourse/:id").delete(courseController.deleteSclass);
Router.route("/DeleteCourses/:id").delete(courseController.deleteSclasses);
Router.route("/UpdateCourses/:id").put(courseController.updateCourseByTeacher);

export const courseRoute = Router;
