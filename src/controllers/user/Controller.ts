import { Request, Response } from 'express';
import successHandler from '../../libs/routes/successHandler';
import UserRepository from '../../repositories/user/UserRepository';
class UserController {
  public static getInstance(instance: UserController) {
    if (!instance) {
      instance = new UserController();
    }
    return instance;
  }

  public repository = new UserRepository();

  public get(req, res: Response) {
    console.log('Inside get method');
    const user = new UserRepository();
    console.log(req.query);
    user
      .findOne({ _id: req.query })
      .then((data) =>
        res
          .status(200)
          .send(successHandler('User Data', 'Successfully Fetch User', data)),
      );
  }

  public create(req: Request, res: Response) {
    console.log('Inside create method');
    console.log(req.body);
    const user = new UserRepository();
    user
      .createUser(req.body)
      .then((data) =>
        res
          .status(200)
          .send(successHandler('Created', 'Successfully Created User', data)),
      );
  }

  public put(req: Request, res: Response) {
    console.log('Inside put method');
    const user = new UserRepository();
    const { id, dataToUpdate } = req.body;
    const originalId = id;
    const name = dataToUpdate.name;
    console.log('data..............', originalId, name);
    user
      .updateUser({ name, originalId })
      .then(() =>
        res
          .status(200)
          .send(
            successHandler(
              'Update',
              'Successfully Updated User',
              `${name} is the new updated value`,
            ),
          ),
      );
  }

  public delete(req: Request, res: Response) {
    console.log('Inside delete method');
    console.log(req.params);
    const user = new UserRepository();
    user
      .deleteUser(req.params)
      .then(() =>
        res
          .status(200)
          .send(
            successHandler(
              'Delete',
              'Successfully Deleted User',
              'Id is deleted',
            ),
          ),
      );
  }

  public createToken(req: Request, res: Response, next) {
    const token = req.body.token;
    res.status(200).send(successHandler('Ok', 'Token generated', token));
  }
}

export default UserController.getInstance(new UserController());
