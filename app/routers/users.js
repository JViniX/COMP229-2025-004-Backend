var express = require('express');
var router = express.Router();

var userController = require('../controllers/users');

router.get('/', userController.getAll);
router.post('/', userController.create);
router.get('/:id', userController.getUser);
router.put('/:id', userController.update);
router.delete('/:id', userController.remove);

module.exports = router;