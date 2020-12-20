
const Team = require('../models/teams')

function create({
 name
}) {
  const newTeam = new Team({
    name
  })
  return newTeam.save()
}

function getAll() {
  return Team.find()
}

function getById(id) {
  return Team.findById(id)

}

function deleteById(id) {
  return Team.findByIdAndDelete(id)
}

function updateById(id, postInfoToUpdate) {
  return Team.findByIdAndUpdate(id, postInfoToUpdate)
}
function pokemonRegister (id, pokemon) {
  return Team.findByIdAndUpdate(id,
    { $push: pokemon })
}

function deletePokemon (id) {
  return Event.findByIdAndUpdate(id,
    { $pop: { teams: -1 } })
}

module.exports = {
  create,
  deleteById,
  getAll,
  getById,
  updateById,
  pokemonRegister,
  deletePokemon
}