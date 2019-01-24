import { Router } from "express";
import trainee from './Controller';

const traineeRouter : Router = new Router();
traineeRouter.get("/", trainee.get);
traineeRouter.post("/", trainee.create);
traineeRouter.put("/", trainee.put);
traineeRouter.delete("/", trainee.delete);

export default traineeRouter;