import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { IUserModel } from 'src/repositories/user/IUserModel';
import { userModel } from './../../repositories/user/UserModel';
import UserRepository from './../../repositories/user/UserRepository';

const userRepo = new UserRepository();
export default function tokenRoutes() {
  return (req, res , next) => {
    const { emailid, pass } = req.query;
    console.log(emailid, pass, '-------------------------------');
    userRepo.findOne({ email: emailid }).then((result: IUserModel) => {
      console.log(result);
      if (!result) {
        next({
          error: 'Invalid Email',
          message: 'Unauthorized Access',
          status: 401,
        });
      }
      const { password } = result;
      console.log(result);
      console.log('expiry time----', Math.floor(Date.now() / 1000) + 900);
      if (bcrypt.compareSync(pass, password)) {
        const token = jwt.sign({ result, exp: Math.floor(Date.now() / 1000) + 900 }, process.env.Key);
        req.body.token = token;
        console.log(token);
        next();
      }
      else {
        next({
          error: 'Wrong Password',
          message: 'Unauthorized Access',
          status: 401,
        });
      }
    })
    .catch((err) => {
      next({
        error: 'User not found',
        message: 'Unauthorized Access',
        status: 404,
      });
    });
  };
}
