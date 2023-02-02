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
const { sendSMS } = require("../services/sms.service");
const { sendEmail } = require("../services/ses.service");

/**
 * @returns {string}
 */
function generateOTP() {
  //generate 4 digit opt
  let otp = "";
  for (let i = 0; i < 4; i++) {
    otp += Math.floor(Math.random() * 10);
  }
  return otp;
}

const authRouter = express.Router();

authRouter.post(
  "/signup/start",
  body("firstname").isString().notEmpty(),
  body("lastname").isString().notEmpty(),
  validate(),
  catchAsync(async (req, res, next) => {
    const { firstname, lastname } = req.body;

    const user = await User.create({
      firstname,
      lastname,
      email: "<empty>",
      emailOTP: generateOTP(),
      phoneNumber: "<empty>",
      phoneNumberOTP: generateOTP(),
      role: "user",
      password: "<empty>",
    });

    return res.status(201).json({
      user: user.toRespDTO(),
    });
  })
);

authRouter.post(
  "/signup/verify/phonenumber/sendOTP",
  body("phoneNumber").isString().notEmpty().isLength({
    min: 10,
    max: 10,
  }),
  body("userId").isString().notEmpty(),
  validate(),
  catchAsync(async (req, res, next) => {
    const { userId, phoneNumber } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      throw new createHttpError.BadRequest("user not found");
    }

    const existingUser = await User.findOne({ phoneNumber });
    if (existingUser && existingUser.isPhoneNumberVerified) {
      throw new createHttpError.BadRequest("phone number taken taken");
    }

    user.phoneNumber = phoneNumber;

    await user.save();

    await sendSMS({
      message: "your otp for verification is: " + user.phoneNumberOTP,
      to: phoneNumber,
    });

    return res.status(200).json({
      user: user.toRespDTO(),
    });
  })
);

authRouter.post(
  "/signup/verify/email/sendOTP",
  body("email").isString().notEmpty().isEmail(),
  body("userId").isString().notEmpty(),
  validate(),
  catchAsync(async (req, res, next) => {
    const { userId, email } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      throw new createHttpError.BadRequest("user not found");
    }

    const existingUser = await User.findOne({ email });
    if (existingUser && existingUser.isEmailVerified) {
      throw new createHttpError.BadRequest("email taken");
    }

    user.email = email;

    await user.save();

    await sendEmail({
      html: "your opt for verification is " + user.emailOTP,
      text: "your opt for verification is " + user.emailOTP,
      subject: "email verification",
      to: email,
    });

    return res.status(200).json({
      user: user.toRespDTO(),
    });
  })
);

authRouter.post(
  "/signup/verify/phonenumber/verify",
  body("userId").isString().notEmpty(),
  body("otp").isString().notEmpty(),
  validate(),
  catchAsync(async (req, res, next) => {
    const { userId, otp } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      throw new createHttpError.BadRequest("user not found");
    }

    console.log(user.phoneNumberOTP);
    console.log(otp);
    console.log(user.phoneNumberOTP === otp);
    if (!(user.phoneNumberOTP === otp)) {
      console.log("error");
      throw new createHttpError.Unauthorized("invalid otp");
    }

    user.isPhoneNumberVerified = true;

    await user.save();

    return res.status(200).json({
      user: user.toRespDTO(),
    });
  })
);

authRouter.post(
  "/signup/verify/email/verify",
  body("userId").isString().notEmpty(),
  body("otp").isString().notEmpty(),
  validate(),
  catchAsync(async (req, res, next) => {
    const { userId, otp } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      throw new createHttpError.BadRequest("user not found");
    }

    if (!(user.emailOTP == otp)) {
      throw new createHttpError.Unauthorized("invalid otp");
    }

    user.isEmailVerified = true;

    await user.save();

    return res.status(200).json({
      user: user.toRespDTO(),
    });
  })
);

authRouter.post(
  "/signup/add/password",
  body("userId").isString().notEmpty(),
  body("password").isString().notEmpty(),
  validate(),
  catchAsync(async (req, res, next) => {
    const { userId, password } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      throw new createHttpError.BadRequest("user not found");
    }
    const hashedPassword = bcryptjs.hashSync(
      password,
      bcryptjs.genSaltSync(12)
    );

    user.password = hashedPassword;

    await user.save();

    return res.status(200).json({
      user: user.toRespDTO(),
    });
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

    if (!user.isEmailVerified) {
      throw new createHttpError.Unauthorized("email not verified");
    }

    if (!user.isPhoneNumberVerified) {
      throw new createHttpError.Unauthorized("email not verified");
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
          user: user.toRespDTO(),
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
