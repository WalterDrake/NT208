import { StatusCodes } from "http-status-codes";
import { courseService } from "~/services/courseService";
import { userService } from "~/services/userService";
import { userController } from "./userController";
import { courseModel } from "~/models/Khoahoc/courseModel";
import { studentModel } from "~/models/studentModel";
import { itemModel } from "~/models/Khoahoc/itemModel";
import { teacherModel } from "~/models/teacherModel";
import { GET_DB } from "~/config/mongodb";
import { ExplainVerbosity, ObjectId } from "mongodb";

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
const getListCoursesofStudentid = async (req, res) => {
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
    const deletedStudents = await studentModel.deletedOneCourse(req.params.id);

    //Truyen vao 1 mang
    const deletedSubjects = await itemModel.deleteItemOfCourse(req.params.id);
    const deletedTeachers = await teacherModel.deleteOneCourse(req.params.id);
    const deletedClasss = await courseModel.findIdAndDelete(req.params.id);
    res.status(StatusCodes.OK).send({ message: "Da xoa thanh cong" });
  } catch (error) {
    next(error);
  }
};

const getListStudentofCoures = async (req, res, next) => {
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
const deleteOneItem = async (idItem) => {
  try {
    // truyen vao id item
    const deletedItem = await GET_DB()
      .collection(courseModel.COURSE_COLLECTION_NAME)
      .updateOne(
        {
          listitem: { $in: idItem },
        },
        {
          $pull: { listitem: { $in: idItem } },
        }
      );
  } catch (error) {
    next(error);
  }
};

const pushStudentIntoCourse = async (req, res, next) => {
  try {
    // truyen vao id khoa hoc va id cua hoc sinh
    const student = await studentModel.findOneById(req.params.idstudent);
    if (!student) {
      return res
        .status(StatusCodes.FAILED_DEPENDENCY)
        .send({ message: " Khong tim thay sinh vien" });
    }
    const pushStudent = await GET_DB()
      .collection(studentModel.USER_COLLECTION_NAME)
      .updateOne(
        { _id: ObjectId(req.params.idstudent) }, // Điều kiện tìm kiếm tài liệu
        {
          $push: {
            course: req.params.idcourse,
            examResult: {
              coursename: req.params.idcourse,
              markObtain: 0,
              hoanthanh: false,
            },
            attendace: {
              coursename: req.params.idcourse,
            },
          },
        } // Thêm giá trị vào trường mảng
      );

    return studentList;
  } catch (error) {
    next(error);
  }
};

const getListCourseStudentDone = async (req, res, next) => {
  try {
    //truyen vao id hoc sinh
    // Luu y lai cai them 1 hoc sinh vao 1 khoa hoc nha
    const listcourse = await courseController.getListCoursesofStudentid(
      req,
      res
    );
    const donecourse = await GET_DB()
      .collection(studentModel.USER_COLLECTION_NAME)
      .find({
        examResult: { coursename: { $in: listcourse }, hoanthanh: true },
      })
      .toArray();
    return res.status(StatusCodes.OK).json(donecourse);
  } catch (error) {
    next(error);
  }
};
const chamdiemchoStudent = async (req, res, next) => {
  try {
    //truyen vao id hoc sinh va id mon hoc va diem so
    const student = await studentModel.findOneById(req.params.idstudent);
    if (!student) {
      return res
        .status(StatusCodes.FAILED_DEPENDENCY)
        .send({ message: "Khong tim thay hoc sinh" });
    }
    const updateMark = await GET_DB()
      .collection(studentModel.USER_COLLECTION_NAME)
      .updateOne(
        {
          _id: new ObjectId(req.params.idstudent),
          course: req.params.idcourse,
        },
        {
          $set: {
            examResult: {
              coursename: req.params.idcourse,
              markObtain: req.params.diemso,
              hoanthanh: true,
            },
          },
        }
      );
    return res.status(StatusCodes.OK).json(updateMark);
  } catch (error) {
    next(error);
  }
};

const getOneCoursebyTeacher = async (req, res, next) => {
  try {
    // truyen vao id khoa hoc va id teacher
    const course = await GET_DB()
      .collection(courseModel.COURSE_COLLECTION_NAME)
      .find({
        _id: new ObjectId(req.params.idcourse),
        owner: req.params.idteacher,
      });
    if (!course) {
      return res
        .status(StatusCodes.FAILED_DEPENDENCY)
        .send({ message: "Khong ton tai yeu cau" });
    }
    const courseone = courseModel.findOneById(req.params.idcourse);
    return res.status(StatusCodes.OK).json(courseone);
  } catch (error) {
    next(error);
  }
};
const getMarkOfCourse = async (req, res, next) => {
  try {
    // truyen vao id khoa hoc va id hoc sinh
    const getmark = await GET_DB()
      .collection(studentModel.USER_COLLECTION_NAME)
      .findOne({
        _id: new ObjectId(req.params.idstudent),
        "examResult.coursename": req.params.idcourse,
      });

    if (getmark) {
      const markExam = getmark.examResult.find(
        (result) => result.coursename === req.params.idcourse
      );

      if (markExam) {
        const diemso = markExam.markObtain;
        return res.json({ diemso: diemso });
      } else {
        return res.json({ diemso: null });
      }
    } else {
      return res.json({ diemso: null });
    }
  } catch (error) {
    next(error);
  }
};
const deleteStudentFromCourse = async (req, res, next) => {
  try {
    // truyen vao id khoa hoc va id hoc sinh
    const student = await studentModel.findOneById(req.params.idstudent);
    if (!student) {
      return res
        .status(StatusCodes.FAILED_DEPENDENCY)
        .send({ message: "Khong tim thay sinh vien" });
    }
    const deletecourse = await GET_DB()
      .collection(studentModel.USER_COLLECTION_NAME)
      .updateOne(
        {
          _id: new ObjectId(req.params.idstudent),
          course: { $in: [req.params.idcourse] },
        },
        {
          $pull: {
            course: req.params.idcourse,
            examResult: { coursename: req.params.idcourse },
          },
        }
      );
    return res.status(StatusCodes.OK).json(deletecourse);
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
  deleteCoursebyAdmin, // xoa 1 khoa hoc
  deleteCoursesbyAdmin, // xoa nhieu khoa hoc
  updateCourseByAdmin,
  pushStudentIntoCourse, // dua 1 hoc sinh vao khoa hoc
  deleteStudentFromCourse, // xoa 1 sinh vien ra khoi khoa hoc

  //Danh cho teacher
  getOneCoursebyTeacher,
  getListStudentofCoures,
  getListCourseofTeacher,
  chamdiemchoStudent,
  deleteOneItem,

  //Ham xuat phat tu hoc sinh
  getListCoursesofStudentid,
  getListCourseStudentDone,
  getMarkOfCourse,
};
