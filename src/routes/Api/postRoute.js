import express from "express";
import { StatusCodes } from "http-status-codes";
import { postController } from "~/controllers/postController";
import { postValidation } from "~/validations/postValidation";

const Router = express.Router();

Router.route("/")
  .get((req, res) => {
    res.status(StatusCodes.OK).json({ message: "GET: API get list Post" });
  })
  .post(postValidation.createNew, postController.createNew);

Router.route("/:id")
  .get(postController.getDetails)
  .put(postValidation.updatePost, postController.updatePost);

// API hỗ trợ việc di chuyển card giữa các column khác nhau trong một board

export const postRoute = Router;
