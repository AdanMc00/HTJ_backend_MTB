const mongoose = require('mongoose')
const Pokemons = require('../models/pokemons')


const teamsSchema = new mongoose.Schema({
    name: {
    type: String,
    minlength: 2,
    maxlength: 100,
    required: true,
    trim: true
  },
  pokemons: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Pokemons',
       autopopulate: true
  }

})
teamsSchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('Teams', teamsSchema)