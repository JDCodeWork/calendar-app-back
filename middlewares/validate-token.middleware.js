const jwt = require("jsonwebtoken")

/**
 * Validate token
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
const validateToken = (req, res, next) => {
  const token = req.header("x-token")

  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: "User not authenticated"
    })
  }

  try {
    const payload = jwt.verify(token, process.env.SECRET_KEY)

    req.user = {
      name: payload.name,
      uid: payload.uid
    }

    next()
  } catch (error) {
    return res.status(400).json({
      ok: false,
      msg: "token is not valid"
    })
  }
}

module.exports = {
  validateToken
}