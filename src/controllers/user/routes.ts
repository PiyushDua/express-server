import { Router } from 'express';
import { authMiddleWare } from '../../libs/routes';
import { validation } from '../trainee/index';

import validationHandler from '../../libs/routes/validationHandler';
import user from './Controller';
import tokenRoutes from '../../libs/routes/tokenRoutes';


const UserRouter: Router = Router();
UserRouter.get(
  '/',
  validationHandler(validation.get),
  authMiddleWare('TRAINEE1', 'read'),
  user.get,
)
  .post(
    '/',
    validationHandler(validation.create),
    // authMiddleWare('TRAINEE1', 'write'),
    // tokenRoutes(),
    // user.createToken,
    user.create,
  )
  .put(
    '/',
    validationHandler(validation.update),
    // authMiddleWare('TRAINEE1', 'all'),
    user.put,
  )
  .delete(
    '/:originalId',
    validationHandler(validation.delete),
    // authMiddleWare('TRAINEE1', 'delete'),
    user.delete,
  );

export default UserRouter;
