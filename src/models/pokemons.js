const mongoose = require('mongoose')

const pokemonsSchema = new mongoose.Schema({

  name: {
    type: String,
    minlength: 2,
    maxlength: 100,
    required: true,
    trim: true
  },
  abilities: [{
    ability: String
  }],
  sprites: [{
    sprite: String

  }],
  stats: [{
    stat: String
  }],
  id: {
    type: Number,
    required: true
  },
  typesOf: [{
    typeOf: String
  }],
  generation: {
    type: Number
  }
})

module.exports = mongoose.model('Pokemons', pokemonsSchema)