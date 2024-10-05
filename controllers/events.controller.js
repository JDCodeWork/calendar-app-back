/**
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
const getEvents = (req, res) => { 
  res.json({
    ok: true,
    msg: "get all events"
  })
}

/**
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
const createEvent = (req, res) => { 
  res.json({
    ok: true,
    msg: "get all events"
  })
}

/**
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
const updateEvent = (req, res) => { 
  res.json({
    ok: true,
    msg: "get all events"
  })
}

/**
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
const deleteEvent = (req, res) => { 
  res.json({
    ok: true,
    msg: "get all events"
  })
}

module.exports = {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent
}