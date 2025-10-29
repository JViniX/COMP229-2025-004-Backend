var express = require('express');
var router = express.Router();

var userController = require('../controllers/users');
var authController = require('../controllers/auth');

router.get('/', userController.getAll);
router.post('/', userController.create);
router.get('/:id', authController.logtoken, authController.requireSign, userController.getUser);
router.put('/:id', authController.requireSign, userController.update);
router.delete('/:id', authController.requireSign, userController.remove);

module.exports = router;