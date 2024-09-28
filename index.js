const express = require("express")
require("dotenv").config()

const { authRouter } = require("./routes")

const app = express()

app.use("/api/auth", authRouter)

app.listen(
  process.env.PORT,
  () => console.log(`Server running in PORT ${process.env.PORT}`)
)