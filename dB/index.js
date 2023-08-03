const mongoose = require("mongoose");
require("dotenv").config();

// const password = process.env.PASSWORD;
const URI =
  "mongodb+srv://ferbassino:6U4Xnn6kaZOBjAhl@cluster0.fu84jsk.mongodb.net/jornData?retryWrites=true&w=majority";
console.log(URI);
module.exports = mongoose
  .connect(URI)
  .then(() => {
    console.log("jornadas database connected");
  })
  .catch((error) => console.log(error));
