import * as jwt from 'jsonwebtoken';
import UserRepository from '../../repositories/user/UserRepository';
import hasPermission from './permissions';

export default (module, permissionType) => (req, res, next) => {
  console.log('Inside auth middleware', module, permissionType);
  const repository = new UserRepository();
  const token = req.header('Authorization');
  const Key = process.env.Key;
  const user = jwt.verify(token, Key);
  if (!user) {
    next({
      message: 'Unauthorized Access' || 'Error Occurred',
      status: 403,
    });
  } else {
    console.log('User is ', user);
    repository.findOne({ _id: user._id }).then((data) => {
      const name = data.name;
      const role = data.role;
      console.log(role);
      if (!hasPermission(module, role, permissionType)) {
        next({ message: 'Permission is not allowed', status: 403 });
      } else {
        console.log('Permission is allowed');
        console.log(user._id);
        req.body.id = data._id;
        next();
      }
      // else {
      //   next({ message: `${name} has no permission to create`, status: 403 });
      // }
    });
  }
};
