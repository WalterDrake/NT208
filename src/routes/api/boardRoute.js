/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */
import express from "express";
import { StatusCodes } from "http-status-codes";
import { boardValidation } from "~/validations/boardValidation";
import { boardController } from "~/controllers/boardController";

const Router = express.Router()

Router.route("/add/:id")
  .get((req, res) => {
    res.status(StatusCodes.OK).json({ message: "GET: API get list boards" });
  })
  .post(boardValidation.createNew, boardController.createNew);

Router.route("/:id")
  .get(boardController.getDetails)
<<<<<<< HEAD
  .put(boardValidation.update, boardController.update)
  .delete(boardValidation.deleteBoard, boardController.deleteBoard)
=======
  .put(boardValidation.update, boardController.update);
>>>>>>> 8ce1313fe4b8d4db4b1b1052bbba7d924cf68e9d

Router.route("/user/:id").get(boardController.getDetailsBoardByUser);
// API hỗ trợ việc di chuyển card giữa các column khác nhau trong một board
Router.route("/supports/moving_card").put(
  boardValidation.moveCardToDifferentColumn,
  boardController.moveCardToDifferentColumn
);

export const boardRoute = Router;
