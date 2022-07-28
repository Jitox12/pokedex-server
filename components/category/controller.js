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
        if (response) {
          res
            .status(200)
            .send({ message: `${response.category} se ha creado con exito` })
        }
      })
      .catch((err) => {
        if (!err) {
            res.status(500).send({ message: err.message })
        } else {
            res
            .status(409)
            .send({ message: "La categoria ya existe" })
        }
      })
  }
  
  module.exports = {
    createCategory
  }