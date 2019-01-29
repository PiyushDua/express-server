import { Router } from "express";
import trainee from "./Controller";
import { validationHandler } from "../../libs/routes";
import validation  from "../trainee/validation";

const traineeRouter: Router = new Router();
traineeRouter
  .get("/", validationHandler(validation.get), trainee.get)
  .post("/", validationHandler(validation.create), trainee.create)
  .put("/", validationHandler(validation.update), trainee.put)
  .delete("/:id", validationHandler(validation.delete),trainee.delete);

export default traineeRouter;
