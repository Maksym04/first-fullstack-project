const { Router } = require('express');
const { userController } = require('../controllers');
const { upload, paginate, validate } = require('../middleware');

const userRouter = Router();

// /api/users
userRouter
  .route('/')
  .get(paginate.paginateUsers, userController.getUsers)
  .post(validate.validateNewUser, userController.createUser);

// /api/users/:userId
userRouter
  .route('/:userId')
  .get(userController.getUserById)
  .patch(validate.validateNewUser, userController.updateUser)
  .put(
    validate.validateNewUser,
    userController.updateOrCreateUser,
    userController.createUser
  )
  .delete(userController.deleteUser);

// /api/users/:userId/images
userRouter.patch(
  '/:userId/images',
  upload.uploadUserPhoto.single('userPhoto'),
  userController.changeImage
);

// /api/users/:userId/tasks
userRouter.get('/:userId/tasks', userController.getUserTasks);

module.exports = userRouter;
