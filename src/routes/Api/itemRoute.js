import express from "express";
import { StatusCodes } from "http-status-codes";
import { itemController } from "~/controllers/itemController";
import { itemValidation } from "~/validations/itemValidation";

const Router = express.Router();

Router.route("/")
  .get((req, res) => {
    res.status(StatusCodes.OK).json({ message: "GET: API get list item" });
  })
  .post(itemValidation.createNew, itemController.createNew);

Router.route("/:id")
  .get(itemController.getDetails)
  .put(itemValidation.updateItem, itemController.updateItem);

// API hỗ trợ việc di chuyển card giữa các column khác nhau trong một board

export const itemRoute = Router;
