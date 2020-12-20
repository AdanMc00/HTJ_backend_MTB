const express = require('express')
const team = require('../usesCases/teams')
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const teams = await team.getAll()
    res.json({
      success: true,
      message: 'all teams',
      data: {
        teams
      }
    })
  } catch (error) {
    res.status(400),
      res.json({
        success: false,
        message: error.message
      })
  }
})
router.post('/', async (request, response) => {
  try {
    const newTeam = await team.create(request.body)
    response.status(200),
      response.json({
        success: true,
        message: 'Team create',
        data: {
          team: newTeam
        }
      })
  } catch (error) {
    response.status(400),
      response.json({
        success: false,
        message: error.message
      })
  }
})
router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const teamFound = await team.getById(id)
    res.json({
      success: true,
      message: 'team by Id',
      data: {
        team: teamFound
      }
    })
  } catch (error) {
    res.status(400),
      res.json({
        success: false,
        message: error.message
      })
  }
})
router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const teamDel = await team.deleteById(id)
    res.json({
      success: true,
      message: 'team Delete',
      data: {
        team: teamDel
      }
    })
  } catch (error) {
    res.status(400),
      res.json({
        success: false,
        message: error.message
      })
  }
})
router.patch('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const info = req.body
    const upDateTeams = await team.updateById(id, info)

    res.json({
      success: true,
      message: 'Changes Done',
      data: {
        team: upDateTeams
      }
    })
  } catch (error) {
    res.status(400),
      res.json({
        success: false,
        message: error.message
      })
  }
})
router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const pokemon = req.body

    const updateTeam = await team.pokemonRegister(id, pokemon)

    res.json({
      success: true,
      message: 'Changes Done',
      data: {
        team: updateTeam
      }
    })
  } catch (error) {
    res.status(400),
      res.json({
        success: false,
        message: error.message
      })
  }
})
router.put('/out/:id', async (req, res) => {
  try {
    const id = req.params.id
    const updateTeam = await team.deletePokemon(id)
    res.json({
      success: true,
      message: 'Changes Done',
      data: {
        event: updateTeam
      }
    })
  } catch (error) {
    res.status(400),
      res.json({
        success: false,
        message: error.message
      })
  }
})

module.exports = router