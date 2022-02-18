import express from 'express';

//controller
import userController from '../controllers/user';

const router = express.Router();

router
  .get('/', userController.onGetAllUsers)
  .post('/', userController.onCreateUser)
  .get('/', userController.onGetUserById)
  .delete('/', userController.onDeleteUserById);


  export default router;