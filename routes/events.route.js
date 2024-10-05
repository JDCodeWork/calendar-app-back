const express = require("express")
const {
  createEvent,
  getEvents,
  updateEvent,
  deleteEvent
} = require("../controllers/events.controller")
const { validateToken } = require("../middlewares/validate-token.middleware")

const router = express.Router()

router.get('/', validateToken, getEvents)

router.post('/', validateToken, createEvent)

router.put('/:id', validateToken, updateEvent)

router.delete('/:id', validateToken, deleteEvent)

module.exports = router