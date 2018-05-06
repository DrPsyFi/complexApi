const express = require('express')
const router = express.Router()
const controller = require('../controller/costumes')

router.get('/', controller.getAllCostumes);
router.get('/:id', controller.getCostumeById);
router.post('/', controller.createCostume);
router.put('/:id', controller.updateCostume)
router.delete('/:id', controller.deleteCostume)
module.exports = router;
