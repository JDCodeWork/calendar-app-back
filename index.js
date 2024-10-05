const express = require("express")
const cors = require("cors")
require("dotenv").config()

const { connectDB } = require("./configs/database.config")
const { authRouter, eventsRouter } = require("./routes")

const app = express()

connectDB()

app.use(cors())

app.use(express.json())

app.use("/api/auth", authRouter)
app.use("/api/events", eventsRouter)

app.listen(
  process.env.PORT,
  () => console.log(`Server running in PORT ${process.env.PORT}`)
)