/**
 * @typedef {import("../middlewares/check-fields.middleware").FieldsValidations} ValidationObject
 */

/**
 * @type {ValidationObject}
 */
const CreateUserValidations = {
  "name": validate => validate().notEmpty(),
  "email": validate => validate("email is not valid").isEmail(),
  "password": validate => validate("password must be greater than or equal to 6 characters").isLength({ min: 6 })
}

/**
 * @type {ValidationObject}
 */
const LoginUserValidations = {
  "email": validate => validate("email is not valid").isEmail(),
  "password": validate => validate().isLength({ min: 6 })
}

module.exports = {
  LoginUserValidations,
  CreateUserValidations
}