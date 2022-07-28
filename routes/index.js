const express = require('express')
const router = express.Router()

require('dotenv').config({path:'./config/.env'})

const API_VERSION = process.env.API_VERSION

const PokemonRoutes = require('../components/pokemon/routes')
const TypeRoutes = require('../components/type/routes')
const CategoryRoutes = require('../components/category/routes')

router.use(`/api/${API_VERSION}`, PokemonRoutes)
router.use(`/api/${API_VERSION}`, TypeRoutes)
router.use(`/api/${API_VERSION}`, CategoryRoutes)

module.exports = router