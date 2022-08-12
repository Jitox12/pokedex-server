const Pokemon = require('./model')
const {toUpperCaseFirstKey} = require('../../utils')

function createPokemon(req, res) {
  const pokemon = new Pokemon()
  const { name, number, height, weight, category, ability, type, weakness } =
    req.body
  const toUpperCaseName = toUpperCaseFirstKey(name)
  
    pokemon.name = toUpperCaseName
    pokemon.number = number
    pokemon.height = height
    pokemon.weight = weight
    pokemon.ability = ability
    pokemon.category = category
    pokemon.type = type
    pokemon.weakness = weakness
    pokemon.avatar = req.file

  pokemon
    .save()
    .then((response) => {
      res
        .status(200)
        .send({ message: `${pokemon.name} se ha creado con exito` })
    })
    .catch((err) => {
      if (err.code === 11000) {
        res
          .status(409)
          .send({ message: 'El nombre o el número del pokémon ya existe' })
      } else {
        res.status(500).send({ message: err.message })
      }
    })
}

function deletePokemon(req, res) {
  Pokemon.findByIdAndDelete(req.params.id)
    .then((result) => {
      if (!result) {
        res.status(404).send({ message: `No se ha encontrado el pokémon` })
      } else {
        res.status(200).send({ message: `${result.name} Eliminado con exito` })
      }
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
}

function updatePokemon(req, res) {
  let pokemonData = req.body
  const toUpperCaseName = toUpperCaseFirstKey(pokemonData.name)

  pokemonData.name = toUpperCaseName

  Pokemon.findByIdAndUpdate(req.params.id, pokemonData, { runValidators: true })
    .then((response) => {
      if (!response) {
        res.status(404).send({ message: 'No se ha encontrado ningún Pokémon' })
      } else {
        res.status(200).send({
          message: `${pokemonData.name} se ha actualizado correctamente`,
        })
      }
    })
    .catch((err) => {
      if (err.code === 11000) {
        res.send({ message: 'El nombre o el número de pokémon ya existe' })
      } else {
        res.status(500).send(err.message)
      }
    })
}

function findPokemons(req, res) {
  Pokemon.find()
    .populate('category', {
      category: 1,
      _id: 0,
    })
    .populate('type', {
      type: 1,
      _id: 0,
    })
    .populate('weakness', {
      type: 1,
      _id: 0,
    })
    .then((response) => {
      if (response) {
        res.status(200).json(response)
      }
    })
    .catch((err) => {
      if (!err) {
        res.status(500).send({ message: err.message })
      } else {
        res.status(400).send({ message: 'No se encontró ningún el pokémon' })
      }
    })
}

function findPokemon(req, res) {
  //middleware para obligar a enviar un _ID en la ruta
  const { id } = req.params

  Pokemon.findById(id)
    .populate('category', {
      category: 1,
      _id: 0,
    })
    .populate('type', {
      type: 1,
      _id: 0,
    })
    .populate('weakness', {
      type: 1,
      _id: 0,
    })
    .then((response) => {
      if (response) {
        res.status(200).json(response)
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message })
    })
}

module.exports = {
  createPokemon,
  deletePokemon,
  updatePokemon,
  findPokemons,
  findPokemon,
}