//@ts-check
const { validationResult } = require("express-validator");
const createHttpError = require("http-errors");

/**
 * @returns {import("express").RequestHandler}
 */
function validate() {
  return function (req, res, next) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      next();
    } else {
      const errArr = errors.array();
      const msg = errArr[0].param + " " + errArr[0].msg;
      next(createHttpError.BadRequest(msg));
    }
  };
}

module.exports = validate;
