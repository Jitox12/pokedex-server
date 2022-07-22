const mongoose = require('mongoose')

const PokemonSchema = new mongoose.Schema({
  name: String,
  number: Number,
  height: Number,
  weight: Number,
  category: String,
  ablity: String,
  gender: Boolan,
  type: { type: Schema.ObjectId, ref: 'Type' },
  weakness: { type: Schema.ObjectId, ref: 'Type' },
  statistic: { type: Schema.ObjectId, ref: 'Statistic' },
})

module.exports = mongoose.model('Pokemon', PokemonSchema)
