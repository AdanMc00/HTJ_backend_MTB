const express = require('express')
const router = express.Router()
const user = require('../usesCases/users')

router.get('/', async (req, res) => {
  try {
    const users = await user.getAll()
    res.json({
      success: true,
      message: 'all users',
      data: {
        users
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

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const userFound = await user.getById(id)
    res.json({
      success: true,
      message: 'user by Id',
      data: {
        user: userFound
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
    const userCreated = await user.create(request.body)
    response.json({
      success: true,
      message: 'user create',
      data: {
        user: userCreated
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: 'error.message'
    })
  }
})
router.delete('/:id', (request, response) => {
  try {
    const { id } = request.params
    const userDeleted = user.deleteById(id)
    response.json({
      success: true,
      message: 'deleted',
      data: {
        user: userDeleted
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
router.patch('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const info = req.body
    const upDateUsers = await user.updateById(id, info)

    res.json({
      success: true,
      message: 'Changes Done',
      data: {
        post: upDateUsers
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
    const team = req.body
    const updateUser = await user.teamRegister(id, team)
    res.json({
      success: true,
      message: 'Changes Done',
      data: {
        user: updateUser
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
    const updateUser = await user.deleteTeam(id)
    res.json({
      success: true,
      message: 'Changes Done',
      data: {
        event: updateUser
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