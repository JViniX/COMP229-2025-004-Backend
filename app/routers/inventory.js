var express = require('express');
var router = express.Router();

var inventoryController = require('../controllers/inventory');
var authController = require('../controllers/auth');

router.get('/', inventoryController.getAll);
router.post('/', authController.requireSign, inventoryController.create);
router.get('/:id', inventoryController.getInventory);
router.put('/:id', inventoryController.update);
router.delete('/:id', inventoryController.remove);

module.exports = router;