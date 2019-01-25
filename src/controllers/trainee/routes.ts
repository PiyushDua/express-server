import { Router } from "express";
import trainee from "./Controller";

const traineeRouter: Router = new Router();
traineeRouter
  .get("/", trainee.get)
  .post("/", trainee.create)
  .put("/", trainee.put)
  .delete("/:id", trainee.delete);

export default traineeRouter;
