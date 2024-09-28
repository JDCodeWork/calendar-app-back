const { validationResult, check } = require('express-validator');

/**
 * @typedef {Object<string, (customMessage?: string) => import('express-validator').ValidationChain>} FieldsValidations
 */

/**
 * Middleware that validate all specified fields  
 * @param {FieldsValidations} fields - An object where the keys are field names and the values are validation functions.
 * @returns {Function[]}.
 */
const checkFields = (fields) => {
  const validations = Object.keys(fields).map(fieldName =>
    fields[fieldName]((customMessage) =>
      check(
        fieldName,
        customMessage || `${fieldName} is required`
      )
    )
  )

  return [
    ...validations,
    (req, res, next) => {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json({
          ok: false,
          errors: errors.mapped()
        })
      }

      next()
    }
  ]
}



module.exports = checkFields