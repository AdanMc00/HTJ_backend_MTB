const Event = require('../models/events')

function create ({
  name,
  hour,
  date,
  image,
  category,
  type

}) {
  const newEvent = new Event({
    name,
    hour,
    date,
    image,
    category,
    type
  })
  return newEvent.save()
}

function getAll () {
  return Event.find()
}

function getById (id) {
  return Event.findById(id)

}

function deleteById (id) {
  return Event.findByIdAndDelete(id)
}

function updateById (id, postInfoToUpdate) {
  return Event.findByIdAndUpdate(id, postInfoToUpdate)
}

function teamsIn (id, team) {
  return Event.findByIdAndUpdate(id,
    { $push: team })
}

function deleteTeam (id) {
  return Event.findByIdAndUpdate(id,
    { $pop: { teams: -1 } })
}

module.exports = {
  create,
  deleteById,
  getAll,
  getById,
  updateById,
  teamsIn,
  deleteTeam
}