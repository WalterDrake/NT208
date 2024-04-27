import express from "express";
import { StatusCodes } from "http-status-codes";
import { cboxController } from "~/controllers/commentBoxController";
import { commentController } from "~/controllers/commentController";
import { postController } from "~/controllers/postController";
import { cboxModel } from "~/models/Monhoc/commentboxModel";
import { cboxValidation } from "~/validations/commentBoxValidation";
import { commentValidation } from "~/validations/commentValidation";
import { postValidation } from "~/validations/postValidation";

const Router = express.Router();

Router.route("/")
  .get((req, res) => {
    res.status(StatusCodes.OK).json({ message: "GET: API get list comemnt" });
  })
  .post(commentValidation.createNew, commentController.createNew);

Router.route("/:id").get(commentController.findOneById);

// API hỗ trợ việc di chuyển card giữa các column khác nhau trong một board

export const commentRoute = Router;
