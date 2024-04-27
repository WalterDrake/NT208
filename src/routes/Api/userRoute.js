import express from "express";
import { userController } from "~/controllers/userController";
import { userModel } from "~/models/userModel";
import { userService } from "~/services/userService";
import { userValidation } from "~/validations/userValidation";

const Router = express.Router();

Router.route("/")
  .get((req, res) => {
    res.json({ message: "GET: API get list " });
  })
  .post(userValidation.createNew, userController.createNew);
//==============================
// STUDENT - CHỨC NĂNG //
//==============================
//---Đăng nhập- Đăng xuất
//--Chức năng đăng nhập kiểm tra
Router.route("/StudentReg").post(userController.createNew);
Router.route("/StudentLogin/:email/:password").post(userController.checkExist);

//--Ấn vào KHÓA HỌC
Router.route("/Khoahoc").get(userController.createNew);
Router.route("/Khoahoc/Studying").get(userController.createNew);
Router.route("/Khoahoc/Done").get(userController.createNew);

//- Chức năng mà học sinh nhấp vào Khóa học
Router.route("/Khoahoc/:id").get().post();

//-- ấn vào HỌC TẬP
Router.route("/Hoctap").get(); // Lấy danh sách toàn bộ học tập
Router.route("/Hoctap/Studying").get();
Router.route("/Hoctap/Done").get();
//--Chức năng khi sinh viên nhấp vào học tập id
Router.route("/Hoctap/:id").get();

//-- ấn vào HỌC NHÓM
Router.route("/Hocnhom").get();
Router.route("/Hocnhom/Lophoc").get();
Router.route("/Hocnhom/Riengtu").get();

//--Ấn vào lớp học chứa id
Router.route("/Hocnhom/:id").get().delete();

//--ấn vào Tham gia hoặc tạo nhóm
Router.route("/Hocnhom/Create").post();
Router.route("/Hocnhom/Join/:id").get().post();
Router.route("/Hocnhom/:id/Seeall");
//-- Them 1 sinh vien vao 1 nhom hoc
Router.route("/Hocnhom/:mssv/add/:idsv").post();

//-- ấn vào Diễn đàn -- Ấy sau
Router.route("/Diendan").get();
Router.route("/Diendan/:tag").get();
Router.route("/Diendan/Newpost/:id.:noidung.:hinhanh").post();

//-- Home
//. Hàm lấy Tên đối tượng
//-- Lấy hết khóa
Router.route("/Home/Goiy").get(); // Chỉ cần trả về tat cả trong database
Router.route("/Home/Studying/:id").get(); // trả về json user

//
Router.route("/Students/:id").get();

Router.route("/Student/:id").get();

//--Xóa

Router.route("/StudentLogin").post();

Router.route("/").get(userController.getDetailsAll);
Router.route("/tracuu/:mssv").get(userController.getIds).put();
Router.route("/:id").get().put();

export const userRoute = Router;
