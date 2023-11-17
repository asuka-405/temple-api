const mongoose = require("mongoose")

const historySchema = new mongoose.Schema({
  method: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
})

const History = mongoose.model("History", historySchema)

module.exports = History
