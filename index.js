const express = require("express")
require("dotenv").config()

const { connectDB } = require("./configs/database.config")
const { authRouter } = require("./routes")

const app = express()

connectDB()

app.use(express.json())

app.use("/api/auth", authRouter)

app.listen(
  process.env.PORT,
  () => console.log(`Server running in PORT ${process.env.PORT}`)
)