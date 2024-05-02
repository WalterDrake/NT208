import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { courseController } from '~/controllers/courseController'
import { courseValidation } from '~/validations/courseValidation'

const Router = express.Router()

/// Chỗ này viết các API cụ thể từng vai trò nè

/////////////////////////////////////////////////////////////////
Router.route("/").get((req, res) => {
  res.status(StatusCodes.OK).json({ message: "GET: API get list Course" });
});

//Lấy API từ course
Router.route("/Course").get(courseController.getDetailsCourseAll); // Lay toan bo danh sach khoa hoc
Router.route("/CourseCreate").post(courseController.createNewbyTeacher); // Tao 1 khoa hoc
Router.route("/Course/:id").get(courseController.getDetailsCourse); // Lay chi tiet khoa hoc tu id cuakhoa hoc
Router.route("/Course/Students/:id").get(courseController.getSclassStudents); // Lay danh sach hoc sinh hoc cai khoa hoc do
Router.route("/DeleteCourse/:id").delete(courseController.deleteSclass); // Xoa 1 course tu id cua no
Router.route("/UpdateCourses/:id").put(courseController.updateCourseByTeacher); // truyen vao id cap nhat course

// Ham xuat phat tu hoc sinh
Router.route("/Course/StudentStudying/:id").get(
  courseController.getCourseByStudentid
);

////// Ham xuat phat tu Giao vien co the nhet vao giao vien sau
Router.route("/DeleteCourses/:id").delete(courseController.deleteSclasses); // Xoa nhung lop ma giao vien tao
Router.route("/CourseList/Teachers/:id").get(
  courseController.getDetailsAllbyTeacher
); // truyen ID giao vien


export const courseRoute = Router
