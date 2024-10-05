/**
* @typedef {import("../middlewares/check-fields.middleware").FieldsValidations} ValidationObject
*/
const isDate = require("../helpers/isDate.helper")

/**
 * @type {ValidationObject}
 */
const CreateEventValidations = {
  "title": validate => validate().notEmpty(),
  "start": validate => validate().custom(isDate),
  "end": validate => validate().custom(isDate)
}

module.exports = {
  CreateEventValidations
}