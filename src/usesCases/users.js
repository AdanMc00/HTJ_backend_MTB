const User = require('../models/users')
const bcrypt = require('../lib/bcrypt')

function getAll () {
  return User.find()
}

function getById (id) {
  return User.findById(id)
}

async function create (userData) {
  const { password, ...restUserData } = userData

  const encryptedPassword = await bcrypt.hash(password)

  return User.create({ password: encryptedPassword, ...restUserData })
}

function deleteById (id) {
  return User.findByIdAndDelete(id)
}

function updateById (id, postInfoToUpdate) {
  return User.findByIdAndUpdate(id, postInfoToUpdate)
}
function teamRegister (id, team) {
  return User.findByIdAndUpdate(id,
    { $push: team })
}
function deleteTeam (id) {
  return Event.findByIdAndUpdate(id,
    { $pop: { teams: -1 } })
}


module.exports = {
  getById,
  getAll,
  create,
  deleteById,
  updateById,
  teamRegister,
  deleteTeam
}