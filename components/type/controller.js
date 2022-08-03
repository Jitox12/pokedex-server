const Type = require('./model')

function createType(req, res) {
  const modelType = new Type()
  const { type } = req.body

  let beginning = type.trim().charAt(0).toUpperCase()
  let rest = type.trim().slice(1)

  ;(modelType.type = beginning + rest),
    modelType
      .save()
      .then((response) => {
        if (response) {
          res
            .status(200)
            .send({ message: `${response.type} se ha creado con exito` })
        }
      })
      .catch((err) => {
        if (err.code === 11000) {
          res.status(409).send({ message: 'El tipo de pokémon ya existe' })
        } else {
          res.status(500).send({ message: err.message })
        }
      })
}

function deleteType(req, res) {
  Type.findByIdAndDelete(req.params.id)
    .then((result) => {
      if (!result) {
        res
          .status(404)
          .send({ message: 'No se encontró ningún tipo de pokémon' })
      } else {
        res
          .status(200)
          .send({ message: `${result.type} se ha eliminado con exito` })
      }
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
}

function updateType(req, res) {
  let typeData = req.body

  let rest = typeData.type.trim().slice(1)
  let beginning = typeData.type.trim().charAt(0).toUpperCase()

  typeData.type = beginning + rest
  Type.findByIdAndUpdate(req.params.id, typeData, { runValidators: true })
    .then((result) => {
      if (!result) {
        res
          .status(404)
          .send({ message: 'No se ha encontrado ningún tipo de pokémon' })
      } else {
        res
          .status(200)
          .send({ message: `${result.type} se ha actualizado con exito` })
      }
    })
    .catch((err) => {
      if (err.code === 11000) {
        res.status(409).send({ message: 'El tipo de pokémon ya existe' })
      } else {
        res.status(500).send(err.message)
      }
    })
}

function findType(req, res) {
  Type.findById(req.params.id)
    .then((result) => {
      if (!result) {
        res
          .status(404)
          .send({ message: 'No se ha encontrado ningún tipo de pokémon' })
      } else {
        res.status(200).json(result)
      }
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
}

function findTypes(req, res) {
  Type.find()
    .then((result) => {
      if (!result) {
        res
          .status(404)
          .send({ message: 'No se ha encontrado ningún tipo de pokémon' })
      } else {
        res.status(200).json(result)
      }
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
}

module.exports = {
  createType,
  deleteType,
  updateType,
  findType,
  findTypes,
}
