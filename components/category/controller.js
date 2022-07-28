const Category = require('./model')

function createCategory(req, res) {

    const categoryModel = new Category()
    
    const {
     category,
    } = req.body

   categoryModel.category = category.trim(),
      
  
    categoryModel
      .save()
      .then((response) => {
          res
            .status(200)
            .send({ message: `${response.category} se ha creado con exito` })
      })
      .catch((err) => {
        if (!err) {
            res.status(500).send({ message: err.message })
        } else {
            res
            .status(409)
            .send({ message: err.message })
        }
      })
  }

function deleteCategory(req,res){
}

function updateCategory(req,res){
}

function findCategories(req,res){
}

function findCategory(req,res){
}
  
  module.exports = {
    createCategory,
    deleteCategory,
    updateCategory,
    findCategories,
    findCategory
  }