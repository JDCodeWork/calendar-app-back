const { Schema, model } = require("mongoose");

const EventSchema = new Schema({
  title: {
    type: String,
    require: true
  },
  description: {
    type: String,
  },
  start: {
    type: Date,
    require: true
  },
  end: {
    type: Date,
    require: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
})

const UserModel = model("User", EventSchema)

module.exports = UserModel