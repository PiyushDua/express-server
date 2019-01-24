import { Router, Request, Response } from "express";
import { traineeRouter } from "./controllers/trainee";

const route: Router = Router();
route.use("/trainee", traineeRouter);
route.use("/user", (req: Request, res: Response) => {
  console.log("User");
  res.send("User");
});
export default route;
