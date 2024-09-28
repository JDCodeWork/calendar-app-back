
/**
 * @module checkFields
 */
const { validationResult, check } = require('express-validator');

/**
 * @callback FieldValidator
 * @param {(fieldName: string, customMessage?: string) => import('express-validator').ValidationChain} eval - Función utilizada para validar campos.
 */

/**
 * Crea un middleware de validación para los campos especificados.
 * @param {FieldValidator[]} fields - Array de funciones de validación que devuelven un Validador.
 * @returns {Function[]} - Un array de middleware de validación.
 */
const checkFields = (fields) => {
  const validations = fields.map(eval =>
    eval(
      (
        fieldName, customMessage) =>
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
};

module.exports = checkFields