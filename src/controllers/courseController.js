import { StatusCodes } from "http-status-codes";
import { courseService } from "~/services/courseService";
import { userService } from "~/services/userService";
import { userController } from "./userController";
import { courseModel } from "~/models/Khoahoc/courseModel";
import { studentModel } from "~/models/studentModel";
import { itemModel } from "~/models/Khoahoc/itemModel";
import { teacherModel } from "~/models/teacherModel";
import { GET_DB } from "~/config/mongodb";

// Tao khoa hoc by Teacher
const createNewbyTeacher = async (req, res, next) => {
  try {
    const createdItem = await courseService.createNew(req.body);
  } catch (error) {
    next(error);
  }
};

// Lay danh sach lop hoc Do giao vien mo lop
const getDetailsAllbyTeacher = async (req, res, next) => {
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

// Update thong tin khoa hoc
const updateCourseByTeacher = async (req, res, next) => {
  try {
    const courseId = req.params.id;
    const updatedCourse = await courseService.updateCourse(courseId, req.body);

    res.status(StatusCodes.OK).json(updatedCourse);
  } catch (error) {
    next(error);
  }
};

// Lay khoa hoc tu chinh Id cua no, thong tin khoa hoc
const getDetailsCourse = async (req, res, next) => {
  try {
    const courseId = req.params.id;
    const course = await courseService.getDetails(courseId);
    res.status(StatusCodes.OK).json(course);
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
      let modifiedStudents = students.map((student) => {
        return { ...student._doc, password: undefined };
      });
      res.send(modifiedStudents);
    } else {
      res.send({ message: "No students found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

// Thuc hien xao 1 lop va loai bo id cua lop do trong hoc sinh
const deleteSclass = async (req, res) => {
  try {
    // Kiem tra coi co ton tai khong
    const deletedClass = await courseModel.findOneById(req.params.id);
    if (!deletedClass) {
      return res.send({ message: "Class not found" });
    }
    // Lưu ý cái bự mà xóa thì toàn bộ cái nhỏ bị xóa dùng deleteMany
    // Cái nhỏ xóa thì sẽ xóa cái đó ra khỏi cái bự là được .
    const deletedStudents = await studentModel.deletedCourse(req.params.id);
    const deletedSubjects = await itemModel.deleteManyCourse(req.params.id);
    const deletedTeachers = await teacherModel.deleteCourse(req.params.id);
    const deletedClasss = await courseModel.findByIdAndDelete(req.params.id);
    res.send(deletedClass);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Xoa tat cac cac lop ma do teacher tao
const deleteSclasses = async (req, res) => {
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
  updateCourseByTeacher,
  createNewbyTeacher,
  getDetailsAllbyTeacher,
  getDetailsCourse,
  getSclassStudents,
  deleteSclass,
  deleteSclasses,
};
