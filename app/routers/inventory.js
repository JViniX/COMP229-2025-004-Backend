var express = require('express');
var router = express.Router();

var inventoryController = require('../controllers/inventory');
var authController = require('../controllers/firebaseAuth');

router.get('/', inventoryController.getAll);
router.post('/', 
    authController.logtoken, 
    authController.requireSign, 
    inventoryController.create);
router.get('/:id', inventoryController.getInventory);
router.put('/:id', 
    authController.logtoken, 
    authController.requireSign, 
    inventoryController.hasAuthorization, 
    inventoryController.update);
router.delete('/:id', 
    authController.logtoken, 
    authController.requireSign, 
    inventoryController.remove);

module.exports = router;