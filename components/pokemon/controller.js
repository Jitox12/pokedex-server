const Pokemon = require("./model")
const { nullValidatorString } = require("../../utils")

function createPokemon(req, res) {
  const pokemon = new Pokemon()
  const {
    name,
    number,
    height,
    weight,
    category,
    ability,
    gender,
    type,
    weakness,
  } = req.body

  ;(pokemon.name = nullValidatorString(name)
    ? res.status(400).send({ message: "name is empty" })
    : name),
    (pokemon.number = !number
      ? res.status(400).send({ message: "number is empty" })
      : number),
    (pokemon.height = !height
      ? res.status(200).send({ message: "height is empty" })
      : height),
    (pokemon.weight = !weight
      ? res.status(200).send({ message: "weight is empty" })
      : weight),
    (pokemon.ability = nullValidatorString(ability)),
    (pokemon.gender = !gender
      ? res.status(200).send({ message: "gender is empty" })
      : gender),
    (pokemon.category = nullValidatorString(category))

  pokemon
    .save()
    .then((response) => {
      if (response) {
        console.log(response)
        res
          .status(200)
          .send({ message: `${pokemon.name} se ha creado con exito` })
      } else {
        console.log(response)
      }
    })
    .catch((err) => {
      if (err.code === 11000) {
        res
          .status(409)
          .send({ message: "El nombre o el número del pokémon ya existe" })
      } else {
        res.status(500).send({ message: "Error de servidor" })
      }
    })
}

module.exports = {
  createPokemon,
}
