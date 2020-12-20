const express = require('express')
const cors = require('cors')
const morgan = require('morgan');
const usersRouter = require('./routes/users')
const teamsRouter = require('./routes/teams')
const eventsRouter = require('./routes/events')
const pokemonsRouter = require('./routes/pokemons')

const app = express()
app.use(morgan('dev'));
app.use(cors())
app.use(express.json())


app.use('/users', usersRouter)
app.use('/events', eventsRouter)
app.use('/teams', teamsRouter)
app.use('/pokemons', pokemonsRouter)
module.exports = app