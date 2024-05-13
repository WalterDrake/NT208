<<<<<<< HEAD
import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { complainController } from '~/controllers/complainController'
import { complainModel } from '~/models/DienDang/complainModel'
=======
import express from "express";
import { StatusCodes } from "http-status-codes";
import { commentController } from "~/controllers/commentController";
import { complainController } from "~/controllers/complainController";
import { complainModel } from "~/models/DienDang/complainModel";
>>>>>>> 8ce1313fe4b8d4db4b1b1052bbba7d924cf68e9d

const Router = express.Router();

Router.route("/").get((req, res) => {
  res.status(StatusCodes.OK).json({ message: "GET: API get Complain" });
});
//Lấy các API từ Admin
Router.route("/ComplainCreate").post(complainController.createNew);
Router.route("/Complain/:id").get(complainController.getDetails);
Router.route("/ComplainList").get(complainController.getDetailsAll);
Router.route("/Search").get(complainModel.findOnSearch);
Router.route("/DeleteComplain/:id").delete(complainModel.DeleteComplain);

// API hỗ trợ việc di chuyển card giữa các column khác nhau trong một board

export const complainRoute = Router;
