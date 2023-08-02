const { Schema, model } = require("mongoose");

const ImuDataSchema = new Schema({
  name: String,
  ref: Array,
  testTime: Number,
  accX: Array,
  accY: Array,
  accZ: Array,
  accT: Array,
});

module.exports = model("imuData", ImuDataSchema);
