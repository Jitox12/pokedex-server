const express = require('express')
const {API_VERSION} = require('../config/detault')
const router = express.Router()
const PokemonRoutes = require('../components/pokemon/routes')

router.use(`/api/${API_VERSION}`, PokemonRoutes)


module.exports = router