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

Router.route("/CreateCourse").post(courseController.createNewCoursebyAdmin);
Router.route("/GetCourseAll").get(courseController.getDetailsCourseAllbyAdmin);
Router.route("/DeleteCourse/:id").delete(courseController.deleteCoursebyAdmin); // truyen vao id course
Router.route("/DeleteCourses/:id").delete(
  courseController.deleteCoursesbyAdmin
); //truyen vao id giao vien
Router.route("/UpdateCourse/:id").put(courseController.updateCourseByAdmin); // truyen vao id course
Router.route("/AddStudent/:idstudent/:idcourse").put(
  courseController.pushStudentIntoCourse
); // truyen vao idstudent va idcourse
Router.route("/DeleteStudentCourse/:idstudent/:idcourse").put(
  courseController.deleteStudentFromCourse
); // truyen vao idstudent va idcourse
Router.route("/GetDetailCourse/:idteacher/:idcourse").get(
  courseController.getOneCoursebyTeacher
); // truyen vao id teacher va idcourse
Router.route("/GetListStudent/:id").get(
  courseController.getListStudentofCoures
); // truyen vao id khoa hoc
Router.route("/GetListCourseTeacher/:id").get(
  courseController.getListCourseofTeacher
); // truyen vao id giao vien
Router.route("/ChamDiem/:idstudent/:idcourse/diemso").post(
  courseController.chamdiemchoStudent
); // truyen vao id student id course va diem so
Router.route("/DeleteOneItem").delete(courseController.deleteOneItem); // truyen vao id item
Router.route("/GetListCoutseStudent/:id").get(
  courseController.getListCoursesofStudentid
); // truyen vao id hoc sinh
Router.route("/GetListCoutseDone/:id").get(
  courseController.getListCourseStudentDone
); // truyen vao id hoc sinh
Router.route("/GetMark/:idstudent/:idcourse").delete(
  courseController.getMarkOfCourse
); // truyen vao idstudent va idcourse

export const courseRoute = Router;
