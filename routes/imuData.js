const express = require("express");

const { createImuData } = require("../controllers/imuData");

const router = express.Router();

router.post("/api/imudata", createImuData);

module.exports = router;
