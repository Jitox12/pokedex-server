const express = require('express')
const PokemonController = require('./controller')
const uploadFiles = require('../../middleware/multer')

const api = express.Router()

//POST
api.post('/create-pokemon', uploadFiles().single('avatar'), PokemonController.createPokemon)

//GET
api.get('/find-pokemons', PokemonController.findPokemons)
api.get('/find-pokemon/:id', PokemonController.findPokemon)

//PUT
api.put('/update-pokemon/:id', PokemonController.updatePokemon)

//DELETE

api.delete('/delete-pokemon/:id', PokemonController.deletePokemon)
module.exports = api
