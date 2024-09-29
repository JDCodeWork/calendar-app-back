const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI)

    console.log('db is on')
  } catch (error) {
    console.log('error on start database -> ', error)
    throw new Error(error)
  }
}

module.exports = {
  connectDB
}