const express = require("express");

const { loginUser, createUser, renewToken } = require("../controllers/auth.controller");

const router = express.Router()

// Login
router.post("/", loginUser)

// Register user
router.post("/new", createUser)

// Renew Token
router.get("/renew", renewToken)

module.exports = router