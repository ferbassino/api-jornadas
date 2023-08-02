const express = require("express");
const router = express.Router();
const app = express();
require("./dB/index");
const ImuData = require("./models/imuData");
const bodyParser = require("body-parser");
const imuDataRouter = require("./routes/imuData");
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json());

app.get("/", (request, response) => {
  response.send("backend zone");
});

app.use(imuDataRouter);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
