var express = require('express');
var router = express.Router();

var projectController = require('../controllers/projects');

router.get('/', projectController.getAll);
router.post('/', projectController.create);
router.get('/:id', projectController.getProject);
router.put('/:id', projectController.update);
router.delete('/:id', projectController.remove);

module.exports = router;