const moment = require("moment")

module.exports = (value) => {
  if (!value) return false

  const date = moment(value)

  if (!date.isValid()) return false

  return true
}