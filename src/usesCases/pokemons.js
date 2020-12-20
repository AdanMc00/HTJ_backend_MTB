const Pokemon = require('../models/pokemons')
const  Pokemons  = require('../../pokemonsFirstGen')
function create({
  name,
  id,
  abilities,
  type,
  stats,
  sprites,
  generation
}) {
  const newPokemon = new Pokemon({
    name,
    id,
    abilities,
    type,
    stats,
    sprites,
    generation
  })
  return newPokemon.save()
}

function getAll() {
  return Pokemon.find()
}


function getById(id) {
  return Pokemon.findById(id)

}

function deleteById(id) {
  return Pokemon.findByIdAndDelete(id)
}

function updateById(id, postInfoToUpdate) {
  return Pokemon.findByIdAndUpdate(id, postInfoToUpdate)
}

function getPokemonsFirst() {
  return Pokemons.getPokemons()
}

module.exports = {
  create,
  deleteById,
  getAll,
  getById,
  updateById,
  getPokemonsFirst

}