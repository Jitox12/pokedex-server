const app = require('./app')
const mongoose = require('mongoose')
require('dotenv').config({ path: './config/.env' })

const API_VERSION = process.env.API_VERSION
const IP_SERVER = process.env.IP_SERVER
const PORT_DB = process.env.PORT_DB
const PORT_SERVER = process.env.PORT_SERVER

mongoose.connect(
  `mongodb://${IP_SERVER}:${PORT_DB}/pokedex`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, res) => {
    if (err) {
      throw err
    } else {
      console.log('La conexion a la base de datos es correcta')
      app.listen(PORT_SERVER, () => {
        console.log(`mongodb://${IP_SERVER}:${PORT_SERVER}/api/${API_VERSION}`)
      })
    }
  }
)
