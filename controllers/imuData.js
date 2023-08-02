const ImuData = require("../models/imuData");

exports.createImuData = async (request, response) => {
  console.log(request.body);
  try {
    const { name, ref, testTime, data } = request.body;
    const newImuData = new ImuData({ name, ref, testTime, data });
    await newImuData.save();
    response.json({
      success: true,
      message: "imuData saved database successfully",
    });
  } catch (error) {
    response.json({
      success: false,
      message: "error saving database",
    });
  }
};
