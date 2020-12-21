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
    ability: {
      name: String,
    }
  }],
  sprites: [{
    back_default: String,
    back_shiny: String,
    front_default: String,
    front_shiny: String

  }],

  stats: [{
    base_stat: Number,
    stat: {
      name: String,
    }
  }],

  id: {
    type: Number,
    required: true
  },
  types: [{
    slot: Number,
    types: {
      name: String
    }
  }],
  generation: {
    type: Number,
    default: 1,
  }
})

module.exports = mongoose.model('Pokemons', pokemonsSchema)