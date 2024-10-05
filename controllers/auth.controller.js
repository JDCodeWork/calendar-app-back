const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")

const UserModel = require("../models/User.model")
const { generateJWT } = require("../helpers/jwt.helper")

/**
 * Login user
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
const loginUser = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email })

    if (!user) {
      return res.status(400).json({
        ok: false,
        msg: "User not fount"
      })
    }

    const validPassword = bcryptjs.compareSync(req.body.password, user.password)

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: "Password is not valid"
      })
    }

    const token = await generateJWT(user.id, user.name)

    res.json({
      ok: true,
      user: {
        name: user.name,
        uid: user.id
      },
      token
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

    const salt = bcryptjs.genSaltSync()
    newUser.password = bcryptjs.hashSync(newUser.password, salt)

    await newUser.save()

    const token = await generateJWT(newUser.id, newUser.name)

    res.status(201).json({
      ok: true,
      user: {
        name: newUser.name,
        id: newUser.id
      },
      token
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
const renewToken = async (req, res) => {
  const { uid, name } = req.user

  const newToken = await generateJWT(uid, name)

  res.json({
    ok: true,
    token: newToken
  })
}

module.exports = {
  loginUser,
  createUser,
  renewToken
}