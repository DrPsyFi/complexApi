const express = require("express")
const router = express.Router()
const controller = require("../controller/tags")


router.get('/', controller.getAllTags);
router.get('/:id', controller.getTagById);
router.post('/', controller.createTag);
router.put('/:id', controller.updateTag)
router.delete('/:id', controller.deleteTag)
module.exports = router;
