const express = require('express')
const TypeController = require('./controller')
const uploadFile = require('../../middleware/multer')
const api = express.Router()

//POST
api.post('/create-type',uploadFile().single('avatar'), TypeController.createType)

//GET
api.get('/find-types', TypeController.findTypes)
api.get('/find-type/:id', TypeController.findType)

//PUT
api.put('/update-type/:id', TypeController.updateType)

//DELETE
api.delete('/delete-type/:id', TypeController.deleteType)

module.exports = api