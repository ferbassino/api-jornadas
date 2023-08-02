const mongoose = require("mongoose");
require("dotenv").config();
const URI = process.env.MONGO_URI;

module.exports = mongoose
  .connect(URI)
  .then(() => {
    console.log("jornadas database connected");
  })
  .catch((error) => console.log(error));
