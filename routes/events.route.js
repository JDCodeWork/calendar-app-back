const express = require("express")
const {
  createEvent,
  getEvents,
  updateEvent,
  deleteEvent
} = require("../controllers/events.controller")
const { validateToken } = require("../middlewares/validate-token.middleware")
const checkFields = require("../middlewares/check-fields.middleware")
const { CreateEventValidations } = require("../validations/events.validator")

const router = express.Router()

// Use validateToken middleware in all endpoints of /events
router.use(validateToken)

router.get('/', getEvents)

router.post('/', checkFields(CreateEventValidations), createEvent)

router.put('/:id', updateEvent)

router.delete('/:id', deleteEvent)

module.exports = router