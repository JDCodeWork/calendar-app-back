const { Schema, model } = require("mongoose");

const EventSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  start: {
    type: Date,
    required: true
  },
  end: {
    type: Date,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
})

EventSchema.method("toJSON", function () {
  const { _id, __v, ...object } = this.toObject()
  object.id = _id

  return object
})

const UserModel = model("Event", EventSchema)

module.exports = UserModel