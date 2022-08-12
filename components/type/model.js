const mongoose = require('mongoose')

const TypeSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      unique: true,
    },
    avatar: {
      type:Object,
      require:true
    }
  },
  {
    versionKey: false,
  }
)

module.exports = mongoose.model('Type', TypeSchema)
