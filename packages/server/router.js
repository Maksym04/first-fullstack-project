const { Router } = require('express');
const userRouter = require('./routers/userRouter');
const taskRouter = require('./routers/taskRouter');

const router = Router();

// /api/users
router.use('/users', userRouter);

// /api/tasks
router.use('/tasks', taskRouter);

module.exports = router;
