const express = require('express')
const {API_VERSION} = require('../config/detault')
const router = express.Router()

const PokemonRoutes = require('../components/pokemon/routes')
const TypeRoutes = require('../components/type/routes')
const CategoryRoutes = require('../components/category/routes')

router.use(`/api/${API_VERSION}`, PokemonRoutes)
router.use(`/api/${API_VERSION}`, TypeRoutes)
router.use(`/api/${API_VERSION}`, CategoryRoutes)

module.exports = router