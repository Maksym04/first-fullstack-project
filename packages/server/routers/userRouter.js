const { Router } = require('express');
const { userController } = require('../controllers');

const userRouter = Router();

// /api/users
userRouter
  .route('/')
  .get(userController.getUsers)
  .post(userController.createUser);

// /api/users/:userId
userRouter
  .route('/:userId')
  .get(userController.getUserById)
  .patch(userController.updateUser)
  .put(userController.updateOrCreateUser, userController.createUser)
  .delete(userController.deleteUser);

// /api/users/:userId/tasks
userRouter.get('/:userId/tasks', userController.getUserTasks);

module.exports = userRouter;
