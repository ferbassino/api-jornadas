const mongoose = require("mongoose");
require("dotenv").config();

const password = process.env.PASSWORD;
const URI =
  "mongodb+srv://ferbassino:1yrdaOVxl8CtBvzp@cluster0.snufx0b.mongodb.net/data?retryWrites=true&w=majority";
console.log(password);
module.exports = mongoose
  .connect(URI)
  .then(() => {
    console.log("jornadas database connected");
  })
  .catch((error) => console.log(error));
