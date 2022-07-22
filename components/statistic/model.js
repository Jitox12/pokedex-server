const mongoose = require('mongoose')

const StatisticSchema = new mongoose.Schema({
  PS: Number,
  ATQ: Number,
  DEF: Number,
  SATQ: Number,
  SDEF: Number,
  SPEED: Number,
})

module.exports = mongoose.model('Stastisc', StatisticSchema)
