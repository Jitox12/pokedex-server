const express = require('express')
const CategoryController = require('./controller')

const api = express.Router()


//POST

api.post('/create-category', CategoryController.createCategory)

//GET


//PUT



module.exports = api