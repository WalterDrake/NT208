import { StatusCodes } from "http-status-codes";
import { courseService } from "~/services/courseService";
import { userService } from "~/services/userService";
import { userController } from "./userController";
import { courseModel } from "~/models/Khoahoc/courseModel";
import { studentModel } from "~/models/studentModel";
import { itemModel } from "~/models/Khoahoc/itemModel";
import { teacherModel } from "~/models/teacherModel";
import { GET_DB } from "~/config/mongodb";
import { ObjectId } from "mongodb";

// Tao khoa hoc by Teacher
const createNewCoursebyAdmin = async (req, res, next) => {
  try {
    const createdItem = await courseService.createNew(req, res, next);
  } catch (error) {
    next(error);
  }
};

// Lay danh sach lop hoc Do giao vien mo lop
const getDetailsCourseAllbyAdmin = async (req, res, next) => {
  try {
    const coures = await courseModel.getDetailsAllbyTeacher(req.params.id);
    if (coures.length > 0) {
      res.status(StatusCodes.OK).json(coures);
    } else {
      res.json({}).send({ message: "Khong co lop nao duoc tim thay" });
    }
  } catch (error) {
    next(error);
  }
};

const getDetailsCourseAll = async (req, res, next) => {
  try {
    const courselist = await courseModel.getDetailsAll();
    res.status(StatusCodes.OK).json(courselist);
  } catch (error) {
    next(error);
  }
};

// Update thong tin khoa hoc
const updateCourseByAdmin = async (req, res, next) => {
  try {
    const courseId = req.params.id;
    const updatedCourse = await courseService.updateCourse(courseId, req.body);

    res.status(StatusCodes.OK).json(updatedCourse);
  } catch (error) {
    next(error);
  }
};

// Lay khoa hoc tu chinh Id cua no, thong tin khoa hoc
const getDetailsCoursebyTeacher = async (req, res, next) => {
  try {
    const courseId = req.params.id;
    const course = await courseService.getDetails(courseId);
    res.status(StatusCodes.OK).json(course);
  } catch (error) {
    next(error);
  }
};

const getListCourseofTeacher = async (req, res, next) => {
  try {
    const listcourse = await GET_DB()
      .collection(courseModel.COURSE_COLLECTION_NAME)
      .find({
        owner: req.params.id, // id giao vien
      });
    res.status(StatusCodes.OK).json(listcourse);
  } catch (error) {
    next(error);
  }
};

// -> truyền về cái id
// Lay danh sach hoc sinh tu cai lop do
const getSclassStudents = async (req, res) => {
  try {
    var students = await studentModel.findCourse(req.params.id);
    if (students.length > 0) {
      res.status(StatusCodes.OK).json(students);
    } else {
      res.send({ message: "No students found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

//Lay danh sach lop hoc cua 1 sinh vien
const getCourseByStudentid = async (req, res) => {
  try {
    var students = await studentModel.findOneById(req.params.id);
    var listcourse = [];
    students.course.array.forEach((element) => {
      var tmp = courseModel.findOneById(element);
      listcourse.push(tmp);
    });
    res.status(StatusCodes.OK).json(listcourse);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Thuc hien xao 1 lop va loai bo id cua lop do trong hoc sinh
const deleteCoursebyAdmin = async (req, res, next) => {
  try {
    // Kiem tra coi co ton tai khong
    const deletedClass = await courseModel.findOneById(req.params.id);
    console.log(deletedClass);
    if (!deletedClass) {
      return res.send({ message: "Class not found" });
    }
    // Lưu ý cái bự mà xóa thì toàn bộ cái nhỏ bị xóa dùng deleteMany
    // Cái nhỏ xóa thì sẽ xóa cái đó ra khỏi cái bự là được . updateMany
    const deletedStudents = await studentModel.deletedCourse(req.params.id);
    const deletedSubjects = await itemModel.deleteManyCourse(req.params.id);
    const deletedTeachers = await teacherModel.deleteCourse(req.params.id);
    const deletedClasss = await courseModel.findIdAndDelete(req.params.id);
    res.status(StatusCodes.OK).send({ message: "Da xoa thanh cong" });
  } catch (error) {
    next(error);
  }
};

const getStudentsFromCourse = async (req, res, next) => {
  try {
    // truyen vao id khoa hoc
    const studentList = await GET_DB()
      .collection(studentModel.USER_COLLECTION_NAME)
      .findMany({ course: { $in: req.params.id } });
    return studentList;
  } catch (error) {
    next(error);
  }
};

// Xoa tat cac cac lop ma do teacher tao
const deleteCoursesbyAdmin = async (req, res) => {
  try {
    const teacher = await teacherModel.findOneById(req.params.id);
    if (teacher.teachCourse.length == 0) {
      return res.send({ message: "No classes found to delete" });
    }
    var arraycourseddelete = teacher.teachCourse;
    const deletedStudents = await GET_DB()
      .collection(USER_COLLECTION_NAME)
      .updateMany(
        { course: { $in: arraycourseddelete } },
        { $pull: { $in: arraycourseddelete } }
      );

    const deletedSubjects = await GET_DB()
      .collection(ITEM_COLLECTION_NAME)
      .deleteMany({ course: new Object(req.params.id) });

    res.send(deletedClasses);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const courseController = {
  //Danh cho admin
  createNewCoursebyAdmin,
  getDetailsCourseAllbyAdmin,
  deleteCoursebyAdmin,
  deleteCoursesbyAdmin,
  updateCourseByAdmin,

  //Danh cho teacher
  getOneCoursebyTeacher,
  getListStudentofCoures,
  getListCourseofTeacher,
  getStudentsFromCourse,

  //Ham xuat phat tu hoc sinh
  getCourseByStudentid,
};
