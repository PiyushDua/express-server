import { Router } from "express";
import trainee from "./Controller";
import { validationHandler } from "../../libs/routes";
import validation from "../trainee/validation";
import { authMiddleWare } from "../../libs/routes";

const traineeRouter: Router = new Router();
traineeRouter
  .get(
    "/",
    validationHandler(validation.get),
    authMiddleWare("TRAINEE1", "read"),
    trainee.get
  )
  .post(
    "/",
    validationHandler(validation.create),
    authMiddleWare("TRAINEE1", "write"),
    trainee.create
  )
  .put(
    "/",
    validationHandler(validation.update),
    authMiddleWare("TRAINEE1", "all"),
    trainee.put
  )
  .delete(
    "/:id",
    validationHandler(validation.delete),
    authMiddleWare("TRAINEE1", "delete"),
    trainee.delete
  );

export default traineeRouter;
