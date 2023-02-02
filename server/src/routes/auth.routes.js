//@ts-check
const express = require("express");
const { body } = require("express-validator");
const { catchAsync } = require("../utils");
const bcryptjs = require("bcryptjs");
const User = require("../models/User");
const validate = require("../middleware/validate");
const createHttpError = require("http-errors");
const jwt = require("jsonwebtoken");
const config = require("../config");
const ms = require("ms");

const authRouter = express.Router();

authRouter.post(
  "/signup",
  body("name").isString().notEmpty(),
  body("email").isString().isEmail().notEmpty(),
  body("password").isString().notEmpty(),
  validate(),
  catchAsync(async (req, res, next) => {
    const { name, email, password } = req.body;

    const exists = await User.exists({ email });
    if (exists) {
      throw new createHttpError.BadRequest("email already registered");
    }

    const salt = await bcryptjs.genSalt(12);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.json(user.toRespDTO());
  })
);

authRouter.post(
  "/login",
  body("email").isString().isEmail().notEmpty(),
  body("password").isString().notEmpty(),
  validate(),
  catchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      throw new createHttpError.BadGateway("wrong email or password");
    }

    const passMatch = await user.comparePassword(password);
    if (!passMatch) {
      throw new createHttpError.BadRequest("wrong email or password");
    }

    const expiresAt = new Date(
      Date.now() + ms(config.app.accessTokenExpiresInStr)
    );
    const accessToken = jwt.sign(user.toRespDTO(), config.app.secretkey, {
      algorithm: "HS256",
      expiresIn: config.app.accessTokenExpiresInStr,
    });

    return res
      .cookie("access_token", accessToken, {
        httpOnly: true,
        sameSite: true,
        expires: expiresAt,
      })
      .json({
        data: {
          accessToken,
          user: user.toRespDTO()
        },
        metadata: {
          accessToken: {
            expiresAtTS: expiresAt.toISOString(),
            expiresAtMS: expiresAt.getTime(),
          },
        },
      });
  })
);

authRouter.get("/logout", (req, res) => {
  return res
    .cookie("access_token", "", {
      httpOnly: true,
      sameSite: true,
      expires: new Date(0),
    })
    .json({
      message: "logout successful",
    });
});

module.exports = authRouter;
