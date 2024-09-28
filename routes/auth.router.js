const express = require("express");

const checkFields = require("../middlewares/check-fields.middleware");
const {
  LoginUserValidations,
  CreateUserValidations
} = require("../validations/auth.validator");
const {
  loginUser,
  createUser,
  renewToken
} = require("../controllers/auth.controller");


const router = express.Router()

// Login
router.post(
  "/", checkFields(LoginUserValidations), loginUser
)

// Register user
router.post(
  "/new", checkFields(CreateUserValidations), createUser
)

// Renew Token
router.get("/renew", renewToken)

module.exports = router