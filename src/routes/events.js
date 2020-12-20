const express = require('express')
const event = require('../usesCases/events')
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const events = await event.getAll()
    res.json({
      success: true,
      message: 'all events',
      data: {
        events
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
    const newEvent = await event.create(request.body)
    response.status(200),
      response.json({
        success: true,
        message: 'Event create',
        data: {
          event: newEvent
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
    const eventFound = await event.getById(id)
    res.json({
      success: true,
      message: 'event by Id',
      data: {
        event: eventFound
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
    const eventDel = await event.deleteById(id)
    res.json({
      success: true,
      message: 'event Delete',
      data: {
        event: eventDel
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
    const upDateEvents = await event.updateById(id, info)
    res.json({
      success: true,
      message: 'Changes Done',
      data: {
        event: upDateEvents
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
    const updateEvent = await event.teamsIn(id, team)
    res.json({
      success: true,
      message: 'Changes Done',
      data: {
        event: updateEvent
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
    const updateEvent = await event.deleteTeam(id)
    res.json({
      success: true,
      message: 'Changes Done',
      data: {
        event: updateEvent
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