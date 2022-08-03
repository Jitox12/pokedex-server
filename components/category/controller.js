const Category = require('./model')

function createCategory(req, res) {
  const categoryModel = new Category()

  const { category } = req.body
  let beginning = category.trim().charAt(0).toUpperCase()
  let rest = category.trim().slice(1)

  ;(categoryModel.category = beginning + rest),
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
          res.status(409).send({ message: err.message })
        }
      })
}

function deleteCategory(req, res) {
  Category.findByIdAndDelete(req.params.id)
    .then((result) => {
      if (!result) {
        res.status(404).send({ message: 'No se ha encontrado la categoria' })
      } else {
        res
          .status(200)
          .send({ message: `${result.category} se ha eliminado con exito` })
      }
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
}

function updateCategory(req, res) {
  categoryData = req.body

  let beginning = categoryData.category.trim().charAt(0).toUpperCase()
  let rest = categoryData.category.trim().slice(1)
  categoryData.category = beginning + rest

  Category.findOneAndUpdate(req.params.id, categoryData, {
    runValidators: true,
  })
    .then((result) => {
      if (!result) {
        res
          .status(404)
          .send({ message: 'No se ha encontrado ninguna categoria' })
      } else {
        res
          .status(200)
          .send({ message: `${result.category} se ha editado con exito` })
      }
    })
    .catch((err) => {
      if (err.code === 11000) {
        res.send({ message: 'El nombre de la categoría ya existe' })
      } else {
        res.send(err.message)
      }
    })
}

function findCategories(req, res) {
  Category.find()
    .then((result) => {
      if (!result) {
        res
          .status(404)
          .send({ message: 'No se ha encontrado ninguna categoria' })
      } else {
        res.status(200).json(result)
      }
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
}

function findCategory(req, res) {
  Category.findById(req.params.id)
    .then((result) => {
      if (!result) {
        res
          .status(404)
          .send({ message: 'No se ha encontrado ninguna categoría' })
      } else {
        res.status(200).json(result)
      }
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
}

module.exports = {
  createCategory,
  deleteCategory,
  updateCategory,
  findCategories,
  findCategory,
}
