import { StatusCodes } from "http-status-codes";
import { userService } from "../services/userService";
import { studentModel, userModel } from "~/models/studentModel";
import { ObjectId } from "mongodb";
import { GET_DB } from "~/config/mongodb";
import { courseModel } from "~/models/Khoahoc/courseModel";
import { json } from "express";

//-Đăng ký Sinh viên

const StudentRegister = async (req, res, next) => {
  try {
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

const getStudentDetails = async (req, res, next) => {
  try {
    const userId = req.params.id;
    console.log(userId);
    const user = await userService.getDetails(new ObjectId(userId));
    res.status(StatusCodes.OK).json(user);
  } catch (error) {
    next(error);
  }
};

const getDetailsAllbyAdmin = async (req, res, next) => {
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

const StudentLogin = async (req, res, next) => {
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

//Xoa tai khoan cua 1 student
const deleteStudent = async (req, res, next) => {
  try {
    const deleteStu = await studentModel.findOneById(req.params.id);
    if (!deleteStu) {
      return res.send({ message: "Khong tim thay sinh vien" });
    }
    const deleted = await studentModel.deleteStudent(req.params.id);
    res
      .status(StatusCodes.OK)
      .send({ message: "Da xoa thanh cong" })
      .json(deleteStu);
  } catch (error) {
    next(error);
  }
};
const updateStudent = async (req, res, next) => {
  try {
    if (req.params.password) {
      const salt = await bcrypt.genSalt(10);
      const password = await bcrypt.hash(res.body.password, salt);
      const news = { ...req.body, password: password, salt: salt };
    }
    const student = await studentModel.update(req.params.id, news);
    const students = await studentModel.findOneById(req.params.id);
    res.status(StatusCodes.OK).json(students);
  } catch (error) {
    next(error);
  }
};

const studentAttendance = async (req, res, next) => {
  try {
    // truyen vao id hoc sinh voi ten mon hoc, ngay va trang thai
    const student = await studentModel.findOneById(req.params.id);
    if (!student) {
      return res
        .status(StatusCodes.FAILED_DEPENDENCY)
        .send({ message: "Khong tim thay hoc sinh" });
    }
    const attendance = student.attendance;
    const cournamejoin = await courseModel.findOneById(attendance.coursename);
  } catch (error) {
    next(error);
  }
};
const deletedStudentFromCourse = async (req, res, next) => {
  try {
    // truyen vao id lop hoc
    const student = await GET_DB()
      .collection(studentModel.USER_COLLECTION_NAME)
      .updateMany(
        { course: { $in: req.params.id } },
        { $pull: { $in: req.params.id } }
      );
  } catch (error) {
    next(error);
  }
};

const deletedOneStudentFromCourse = async (req, res, next) => {
  try {
    // truyen vao id lop hoc va id hoc sinh
    const student = await studentModel.findOneById(req.params.idstudent);
    const course = await courseModel.findOneById(req.params.idcourse);
    if (!student || !course) {
      return res
        .status(StatusCodes.FAILED_DEPENDENCY)
        .send({ message: "Khong ton tai sinh vien hoac mon hoc" });
    }
    if (!student.course.find((item) => (item = idcourse))) {
      return res
        .status(StatusCodes.FAILED_DEPENDENCY)
        .send({ message: "Hoc sinh khong hoc torng lop do" });
    }
    const deleted = await GET_DB()
      .collection(USER_COLLECTION_NAME)
      .updateOne(
        { _id: new ObjectId(req.params.idstudent) },
        { $pull: { course: req.params.idcourse } }
      );
    return res.send({ message: "Da xoa thanh cong" });
  } catch (error) {
    next(error);
  }
};

export const userController = {
  //Danh cho Admin
  getDetailsAllbyAdmin,
  getIds,
  deleteStudent,
  deletedStudentFromCourse,

  //Ham danh cho teacher
  studentAttendance, // -------------
  deletedOneStudentFromCourse,

  // Ham danh cho sinh vien
  StudentRegister,
  getStudentDetails,
  StudentLogin,
  updateStudent,

  //Lien quan den teacher,admin
};
