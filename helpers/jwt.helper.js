const jwt = require("jsonwebtoken")


const generateJWT = (uid, name) => {
  const payload = { uid, name }

  return new Promise((resolve, reject) => {
    jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: "2h"
    }, (error, token) => {
      if (error) {
        console.log('error', error)
        reject("has been error")
      }

      resolve(token)
    })
  })
}

module.exports = {
  generateJWT
}