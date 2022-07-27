const express = require('express')
const PokemonController = require('./controller')

const api = express.Router()


//POST

api.post('/create-pokemon', PokemonController.createPokemon)

//GET


//PUT



module.exports = api