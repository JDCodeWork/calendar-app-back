const UserModel = require("../models/User.model")

/**
 * Login user
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
const loginUser = (req, res) => {
}

/**
 * Create new user
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
const createUser = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email })

    if (user) {
      return res.status(400).json({
        ok: false,
        msg: "User already exist"
      })
    }

    const newUser = new UserModel(req.body)
    await newUser.save()

    res.status(201).json({
      ok: true,
      user: {
        name: newUser.name,
        id: newUser.id
      }
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