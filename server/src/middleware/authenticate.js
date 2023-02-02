//@ts-check
const createHttpError = require("http-errors");
const jwt = require("jsonwebtoken");
const config = require("../config");

/**
 * @returns {import("express").RequestHandler}
 */
function authenticate() {
  return function (req, res, next) {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const headerVal = authHeader.trim();
      const tokens = headerVal.split(" ");
      if (tokens.length !== 2) {
        next(
          new createHttpError.Unauthorized(
            'authorization header format must be "Authorization: Bearer <token>"'
          )
        );
        return;
      }
      const prefix = tokens[0];
      if (prefix !== "bearer" && prefix !== "Bearer") {
        next(
          new createHttpError.Unauthorized(
            'authorization header format must be "Authorization: Bearer <token>"'
          )
        );
        return;
      }
      const token = tokens[1];
      try {
        const result = jwt.verify(token, config.app.secretkey);
        //@ts-expect-error
        req.user = result;
        next();
        return;
      } catch (err) {
        next(new createHttpError.Unauthorized("invalid token"));
        return;
      }
    } else {
      //check cookies
      const accessTokenCookie = req.cookies.access_token;
      if (!accessTokenCookie) {
        next(new createHttpError.Unauthorized("no credentials found"));
        return;
      }
      const token = accessTokenCookie.trim();
      try {
        const result = jwt.verify(token, config.app.secretkey);
        //@ts-expect-error
        req.user = result;
        next();
        return;
      } catch (err) {
        next(new createHttpError.Unauthorized("invalid token"));
        return;
      }
    }
  };
}

module.exports = authenticate;
