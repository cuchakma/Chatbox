import express from 'express';

//controller
import user from '../controllers/user';

const router = express.Router();

router
  .get('/', user.onGetAllUsers)
  .post('/', user.onCreateUser)
  .get('/', user.onGetUserById)
  .delete('/', user.onDeleteUserById);


  export default router;