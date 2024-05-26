import express from "express";
import { StatusCodes } from "http-status-codes";
import { cboxController } from "~/controllers/commentBoxController";
import { cboxValidation } from "~/validations/commentBoxValidation";

const Router = express.Router();

Router.route("/").get((req, res) => {
  res.status(StatusCodes.OK).json({ message: "GET: API get list cBox" });
});
Router.route("/GetCBoxAll").get(cboxController.getDetails);
Router.route("/GetListcommentCbox/:id").get(cboxController.GetListcommentCbox);
Router.route("/DeletedCommentinCBox/:id").delete(
  cboxController.DeletedCommentinCBox
);

Router.route('/')
  .get((req, res) => {
    res.status(StatusCodes.OK).json({ message: 'GET: API get list cBox' })
  })
  .post(cboxValidation.createNew, cboxController.createNew)
Router.route('/:id').get(cboxController.findOneById)
Router.route('/get/All').get(cboxController.getDetails)
Router.route('/:id/getComments') //id of studyId
  .get(cboxController.getComments)

export const cboxRoute = Router

