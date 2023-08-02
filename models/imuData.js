const { Schema, model } = require("mongoose");

const ImuDataSchema = new Schema({
  name: String,
  ref: Array,
  testTime: Number,
  data: Array,
});

module.exports = model("imuData", ImuDataSchema);
