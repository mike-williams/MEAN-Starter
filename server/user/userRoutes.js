const express = require('express');
const router = express.Router();

const userController = require('./userController');

/* API listing. */
router.get('/users', userController.getUsers);

module.exports = router;
