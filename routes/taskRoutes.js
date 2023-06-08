const express = require('express');

const router = express.Router();

const taskControllers = require('../controllers/taskControllers');
const {createTaskController, getAllTasksController, getSingleTaskController, createUser, getUser} = taskControllers


router.post('/', createTaskController);

router.get('/', getAllTasksController);

router.get('/:id', getSingleTaskController);

router.post('/', createUser);


module.exports = router;