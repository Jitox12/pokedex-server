const express = require('express')
const CategoryController = require('./controller')

const api = express.Router()

//POST
api.post('/create-category', CategoryController.createCategory)

//GET
api.get('/find-categories', CategoryController.findCategories)
api.get('/find-category/:id', CategoryController.findCategory)

//PUT
api.put('/update-category/:id', CategoryController.updateCategory)

//DELETE
api.delete('/delete-category/:id', CategoryController.deleteCategory)

module.exports = api
