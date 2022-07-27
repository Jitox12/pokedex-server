const app = require('./app')
const mongoose = require('mongoose')

const {
  API_VERSION,
  IP_SERVER,
  PORT_DB,
  PORT_SERVER,
} = require('./config/detault')

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
     
        console.log(
          `mongodb://${IP_SERVER}:${PORT_SERVER}/api/${API_VERSION}`
        )
      })
    }
  }
)
