const express = require('express');
const router = express.Router();

const userController = require('./userController');

router.get('/users', userController.getUsers);
router.post('/user', userController.addUser);

module.exports = router;
