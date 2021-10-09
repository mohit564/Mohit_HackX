const mongoose = require("mongoose");

const ChannelSchema = mongoose.Schema({
  name: String,
  source: String,
  image: String,
});

module.exports = mongoose.model("Channel", ChannelSchema);
