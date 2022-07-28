const Type = require('./model')

function createType(req,res){

    const modelType = new Type()

    const {
      type,
    } = req.body

    modelType.type = type.trim(),

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
          res
            .status(409)
            .send({ message: "El tipo de pokémon ya existe" })
        } else {
          res.status(500).send({ message: err.message })
        }
      })
}


module.exports = {
    createType
}