const { StatusCodes } = require("http-status-codes");

const info = (req, res) => {
  return res.status(StatusCodes.OK).json({
    success: true,
    data: {},
    error: {},
    msg: "API is Live",
  });
};
module.exports = { info };
