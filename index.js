require('dotenv').config()
db = require('./src/lib/db')
const server = require('./src/server')

db
  .then(() => {
    server.listen(8080, () => {
      console.log('Servidor Conectado')
    })

    console.log('Base de Datos Activa ')

  })
  .catch((error => {
      console.log('Algo salio mal', error)
    })

  )