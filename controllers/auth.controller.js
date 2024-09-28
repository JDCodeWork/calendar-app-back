const { validationResult } = require("express-validator")

/**
 * Login user
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
const loginUser = (req, res) => {
  res.json({
    ok: true
  })
}

/**
 * Create new user
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
const createUser = (req, res) => {
}

/**
 * Renew token
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
const renewToken = (req, res) => {
}

module.exports = {
  loginUser,
  createUser,
  renewToken
}