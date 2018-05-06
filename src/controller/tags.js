const model = require("../model/tags")
const newId = require('shortid')

function getAllTags(req, res, next) {
  const tags = model.getAllTags();
  res.status(200).json({data: tags});
}

function getTagById(req, res, next) {
  const id = req.params.id;

  const tag = model.getTagById(id);
  if(tag){
    return res.status(200).json({data: tag})
  }
  next({ status: 404, message: `Tag ${id} not found` });
}

function createTag(req, res, next) {
  const { name } = req.body

  if (!name || name.length >= 11) {
    return next ({ status: 400, message: "To create a tag a name is needed and max name length is 10 characters"})
  }
  else {
    const id = newId.generate()
    const newTag = model.createTag( id , name );
    res.status(201).json({ data: newTag });
  }
}

const updateTag = (req, res, next) => {
  const id = req.params.id;
  const name = req.body.name

  if(!id || !name || name.length >= 11) {
    return next ({ status: 400, message: "You need to submit the following info to updatag a Tag : id, name"})
  }
  else {
    const updatedTag = model.updateTag(id, name)
    res.status(200).json({data: updateTag})
  }
}
const deleteTag = (req, res, next) => {
  const id = req.params.id
  const deletedTag = model.deleteTag(id)

  if(!id) {({status: 404, message: `Tag ${id} was not found.`})
    return next
  }
  else {
    res.status(204).json({data: deleteTag})
  }
}


module.exports = {
  getAllTags,
  getTagById,
  createTag,
  updateTag,
  deleteTag
}
