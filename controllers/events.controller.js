const EventModel = require("../models/Event.model")

/**
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
const getEvents = async (req, res) => {
  const events = await EventModel.find({ user: req.user.uid }).populate("user", "name")

  res.json({
    ok: true,
    events
  })
}

/**
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
const createEvent = async (req, res) => {
  const newEvent = new EventModel({ ...req.body, user: req.user.uid })

  try {
    await newEvent.save()

    res.json({
      ok: true,
      event: newEvent
    })

  } catch (error) {
    console.log('error', error)

    res.status(500).json({
      ok: false,
      msg: "has been internal error"
    })

  }

}

/**
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
const updateEvent = async (req, res) => {
  const { id: eventId } = req.params

  try {
    const event = { ...req.body, user: req.user.uid }
    const updateEvent = await EventModel.findByIdAndUpdate(eventId, event, { new: true })

    res.json({
      ok: true,
      event: updateEvent
    })
  } catch (error) {
    console.log('error', error)
    res.status(500).json({
      ok: false,
      msg: "Has been an error"
    })
  }

}

/**
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
const deleteEvent = async (req, res) => {
  const { id: eventId } = req.params

  try {
    await EventModel.findByIdAndDelete(eventId)
    
    res.json({
      ok: true,
    })
  } catch (error) {
    console.log('error', error)
    res.status(500).json({
      ok: false,
      msg: "Has been an error"
    })
  }
}

module.exports = {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent
}