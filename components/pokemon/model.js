const mongoose = require('mongoose')

const PokemonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  number: {
    type:Number,
    required: true,
    unique: true,
  },
  height: {
    type:Number,
    required: true
  },
  weight: {
    type:Number,
    required: true
  },
  category: {
    type:String,
    required: true
  },
  ability: {
    type:String,
    required: true
  },
  //Probar con ENUM
  gender: {
    type: Boolean,
    required: true
  },
  type: {  },
  weakness: {  },

})

module.exports = mongoose.model('Pokemon', PokemonSchema)