const model = require("../model/costumes")

const getAllCostumes = (req, res, next) => {
  const costumes = model.getAllCostumes();
  res.status(200).json({ data: costumes });
};

const getCostumeById = (req, res, next) => {
  const id = req.params.id;
  const costume = model.getCostumeById(id);
  if (costume) return res.status(200).json({ data: costume });
  next({ status: 404, message: `Costume ${id} not found` });
}

const createCostume = (req, res, next) => {
  const { name, price } = req.body
  if (!name || !price) {
    return next ({ status: 400, message: "Costume 'name' and 'price' are required"})
  }
  else {
    const newCostume = model.createCostume(name, price);
    res.status(201).json({ data: newCostume });
  }
}

const updateCostume = (req, res, next) => {
  const id = req.params.id;
  const name = req.body.name
  const price = req.body.price

  if(!id || !name || !price) {
    return next ({ status: 400, message: "You need to submit the following info to update : id, name, price"})
  }
  else {
    const updatedCostume = model.updateCostume(id, name, price)
    res.status(200).json({data: updateCostume})
  }
}

const deleteCostume = (req, res, next) => {
  const id = req.params.id
  const deletedCostume = model.deleteCostume(id)

  if(!id) {({status: 404, message: `Costume ${id} was not found.`})
    return next
  }
  else {
    res.status(204).json()
  }
}
module.exports = {
  getAllCostumes,
  getCostumeById,
  createCostume,
  updateCostume,
  deleteCostume
};
