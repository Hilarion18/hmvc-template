const router = require('express').Router();
const userController = require('../modules/user/controllers/user');

router.get('/', userController.getAllUsers);

module.exports = router;
