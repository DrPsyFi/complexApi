const fs = require("fs")


///////  Lines Below are to create dynamic file paths ///////////
const path = require('path')
const filePath = path.join(__dirname,'../../db.json' )
///////////////////////////////////////////////////////////////

const db =JSON.parse(fs.readFileSync(filePath, 'utf-8' ))



function getAllTags() {
  return db.tags
}

function getTagById(id) {

  return db.tags.find((tag) => {
    return tag.id === id
  })
}

function createTag( id, name ) {
  const newTag = { id , name };
  db.tags.push(newTag)
  const contentsAsJSON = JSON.stringify(db)
  const result = fs.writeFileSync(filePath, contentsAsJSON)

  return newTag;
}
function updateTag(id, name) {

  let tag2Update = db.tags.find((tag) => {
    return tag.id === id;
   })


   tag2Update.name = name;
   const updatedTag = {id , name };

    const contentsAsJSON = JSON.stringify(db)
    const result = fs.writeFileSync(filePath, contentsAsJSON)
  }

function deleteTag(id) {
    let tag2Delete = db.tags.findIndex((tag) => {
       return tag.id === id;
     })
     console.log(tag2Delete, "YO");
     const deletedTag = db.tags.splice(tag2Delete, 1)

     const contentsAsJSON = JSON.stringify(db)
     const result = fs.writeFileSync(filePath, contentsAsJSON)

  }
module.exports = {
  getAllTags,
  getTagById,
  createTag,
  updateTag,
  deleteTag
}
