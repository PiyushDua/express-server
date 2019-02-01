import { Router } from "express";
import user from "./Controller";
import { validationHandler } from "../../libs/routes";
import validation from "../trainee/validation";
import { authMiddleWare } from "../../libs/routes";

const UserRouter: Router = new Router();
UserRouter.get(
  "/",
  //validationHandler(validation.get),
  //authMiddleWare("TRAINEE1", "read"),
  user.get
)
  .post(
    "/",
    //validationHandler(validation.create),
    //authMiddleWare("TRAINEE1", "write"),
    user.create
  )
  .put(
    "/",
    //validationHandler(validation.update),
    //authMiddleWare("TRAINEE1", "all"),
    user.put
  )
  .delete(
    "/:_id",
    //validationHandler(validation.delete),
    //authMiddleWare("TRAINEE1", "delete"),
    user.delete
  );

export default UserRouter;
