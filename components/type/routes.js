const express = require('express')
const TypeController = require('./controller')

const api = express.Router()

//POST
api.post('/create-type', TypeController.createType)

//GET
api.get('/find-types', TypeController.findTypes)
api.get('/find-type/:id', TypeController.findType)

//PUT
api.put('/update-type/:id', TypeController.updateType)

//DELETE
api.delete('/delete-type/:id', TypeController.deleteType)

module.exports = api
