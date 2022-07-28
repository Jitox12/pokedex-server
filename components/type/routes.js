const express = require('express')
const TypeController = require('./controller')

const api = express.Router()


//POST

api.post('/create-type', TypeController.createType)

//GET


//PUT



module.exports = api