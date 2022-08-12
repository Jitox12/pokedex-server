const mongoose = require('mongoose')

const PokemonSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    number: {
      type: Number,
      required: true,
      unique: true,
    },
    height: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    ability: {
      type: String,
      required: true,
    },
    avatar:{
      type: Object,
      required:true
    },

    type: { type: mongoose.Schema.Types.ObjectId, ref: 'Type', required: true },
    weakness: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'Type', required: true },
    ],
  },
  {
    versionKey: false,
  }
)

module.exports = mongoose.model('Pokemon', PokemonSchema)
