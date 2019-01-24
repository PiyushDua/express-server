import { Request, Response, NextFunction } from "express";
import successHandler from "../../libs/routes/successHandler";
class TraineeController {
  get(req: Request, res: Response) {
    const data = [
      {
        name: "trainee1"
      },
      {
        name: "trainee2"
      }
    ];
    res.status(200);

    res.send(successHandler("Ok", "Successfully Fetch Trainee", data));
    console.log("Inside get method");
  }
  create(req: Request, res: Response) {
    console.log("-----------19------", req.body);
    const { name, id } = req.body;
    if (!name) {
      res
        .status(400)
        .send({ status: "Bad request", message: "name is not present" });
    }
    if (!id) {
      res
        .status(400)
        .send({ status: "Bad request", message: "ID is not present" });
    } else
      res.status(200).send({
        status: "ok",
        message: "Successfully Created",
        data: { name, id }
      });
  }
  put(req: Request, res: Response) {
    const { name, id } = req.body;
    if (!name) {
      res
        .status(400)
        .send({ status: "Bad request", message: "name is not present" });
    }
    if (!id) {
      res
        .status(400)
        .send({ status: "Bad request", message: "ID is not present" });
    } else
      res.status(200).send({
        status: "ok",
        message: "Successfully Updated",
        data: { name, id }
      });
  }
  delete(req: Request, res: Response) {
    res.status(200).send({
      status: "ok",
      message: "Successfully deleted",
      data: null
    });
  }
}

export default new TraineeController();
