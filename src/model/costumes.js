const fs = require('fs')

///////  Lines Below are to create dynamic file paths ///////////
const path = require('path')
const filePath = path.join(__dirname,'../../db.json' )
///////////////////////////////////////////////////////////////

const db =JSON.parse(fs.readFileSync(filePath, 'utf-8' ))


function getAllCostumes() {
  return db.costumes;
}

function getCostumeById(id) {
  return db.costumes.find((costume) => {
    return costume.id === parseInt(id);
  });
}

function createCostume (name, price) {

  const lastCostume = db.costumes[db.costumes.length-1];
  const newCostume = { id: lastCostume.id+1, name, price };
    db.costumes.push(newCostume)
  const contentsAsJSON = JSON.stringify(db)
  const result = fs.writeFileSync(filePath, contentsAsJSON)

  return newCostume;
}

function updateCostume(id, name, price) {

  let costume2Update = db.costumes.find((costume) => {
     return costume.id === parseInt(id);
   })
    costume2Update.name = name;
    costume2Update.price = price;

    const updatedCostume = {id , name, price };

    const contentsAsJSON = JSON.stringify(db)
    const result = fs.writeFileSync(filePath, contentsAsJSON)
  }

function deleteCostume(id) {
  let costume2Delete = db.costumes.findIndex((costume) => {
     return costume.id === parseInt(id);
   })
   
   const deletedCostume = db.costumes.splice(costume2Delete, 1)

   const contentsAsJSON = JSON.stringify(db)
   const result = fs.writeFileSync(filePath, contentsAsJSON)

}



module.exports = {
  getAllCostumes,
  getCostumeById,
  createCostume,
  updateCostume,
  deleteCostume
};
