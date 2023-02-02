//@ts-check
const createHttpError = require("http-errors");

/**
 * @returns {import('express').ErrorRequestHandler}
 */
function errorHandler() {
  return function (err, req, res, next) {
    console.log(err.stack || err.message);
    if (createHttpError.isHttpError(err)) {
      res.status(err.statusCode).json({
        message: err.message,
        statusCode: err.statusCode,
      });
      return;
    } else {
      res.status(500).json({
        status: 500,
        message: "something went wrong",
      });
      return;
    }
  };
}

module.exports = errorHandler;
