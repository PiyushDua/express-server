import { Request, Response, NextFunction } from "express";
import successHandler from "../../libs/routes/successHandler";
import UserRepository from "../../repositories/user/UserRepository";
class UserController {
  public static getInstance(instance: UserController) {
    if (!instance) {
      instance = new UserController();
    }
    return instance;
  }

  get(req: Request, res: Response) {
    console.log("Inside get method");
    const user = new UserRepository();
    user
      .getUser(req.query.id)
      .then(data =>
        res
          .status(200)
          .send(successHandler("User Data", "Successfully Fetch User", data))
      );
  }

  create(req: Request, res: Response) {
    console.log("Inside create method");
    const user = new UserRepository();
    user
      .create(req.body)
      .then(data =>
        res
          .status(200)
          .send(successHandler("Created", "Successfully Created User", data))
      );
  }

  put(req: Request, res: Response) {
    console.log("Inside put method");
    const user = new UserRepository();
    const { oldData, newData } = req.body;
    user
      .update({ name: oldData }, { name: newData })
      .then(() =>
        res
          .status(200)
          .send(
            successHandler(
              "Update",
              "Successfully Updated User",
              `${newData} is the new updated value`
            )
          )
      );
  }

  delete(req: Request, res: Response) {
    console.log("Inside delete method");
    const user = new UserRepository();
    user
      .delete(req.params)
      .then(() =>
        res
          .status(200)
          .send(
            successHandler(
              "Delete",
              "Successfully Deleted User",
              "Id is deleted"
            )
          )
      );
  }
}

export default UserController.getInstance(new UserController());
