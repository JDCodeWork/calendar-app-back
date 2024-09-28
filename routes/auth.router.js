const express = require("express");
const { check } = require("express-validator");

const { loginUser, createUser, renewToken } = require("../controllers/auth.controller");
const checkFields = require("../middlewares/check-fields.middleware");

const router = express.Router()

// Login
router.post(
  "/",
  checkFields([
    (eval) => eval("email").isEmail(),
    (eval) => eval("name").notEmpty(),
    (eval) => eval("password").isLength({ min: 6 }),
  ])
  ,
  loginUser
)

// Register user
router.post("/new", createUser)

// Renew Token
router.get("/renew", renewToken)

module.exports = router