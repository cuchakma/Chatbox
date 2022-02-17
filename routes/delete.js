import express from 'express';

/**
 * Controller for deleting the Room and the Message
 */
import deleteController from '../controllers/delete';

const router = express.Router();

/**
 * Router handler for deletion process by using the Controller of "delete.js"
 */
router
  .delete('/room/:roomId', deleteController.deleRoomById)
  .delete('/message/:messageId', deleteController.deleteMessageById);

export default router;
