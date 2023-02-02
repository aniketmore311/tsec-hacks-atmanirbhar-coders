//@ts-check
const express = require("express");
const createHttpError = require("http-errors");
const authenticate = require("../middleware/authenticate");
const authorize = require("../middleware/authorize");
const Profile = require("../models/Profile");
const { catchAsync, getPercentageMatch } = require("../utils");
const upload = require("../setup/multer.setup");
const { body } = require("express-validator");
const User = require("../models/User");

const userRouter = express.Router();

userRouter.get("/me", authenticate(), authorize("user"), (req, res) => {
  //@ts-ignore
  const user = req.user;
  return res.json({
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  });
});

userRouter.get(
  "/profile",
  authenticate(),
  authorize("user"),
  catchAsync(async (req, res) => {
    //@ts-ignore
    const user = req.user;

    const profile = await Profile.findOne({ userId: user.id })
      .populate("userId")
      .exec();
    if (!profile) {
      throw new createHttpError.NotFound("user's profile not found");
    }
    return res.json(profile.toJSON());
  })
);

userRouter.get(
  "/profile/matches",
  authenticate(),
  authorize("user"),
  catchAsync(async (req, res) => {
    //@ts-ignore
    const user = req.user;

    const profile = await Profile.findOne({ userId: user.id });
    if (!profile) {
      throw new createHttpError.BadRequest("user has no profile");
    }
    const profiles = await Profile.find();
    const results = [];
    for (const otherProfile of profiles) {
      if (profile.id != otherProfile.id) {
        results.push({
          profile: otherProfile.toJSON(),
          percentageMatch: getPercentageMatch(profile, otherProfile),
        });
      }
    }
    results.sort((first, second) => {
      return second.percentageMatch - first.percentageMatch;
    });
    return res.json(results);
  })
);

userRouter.patch(
  "/profile",
  body("bio").isString().notEmpty().optional(),
  body("type").isString().notEmpty().optional(),
  body("institute").isString().notEmpty().optional(),
  body("field").isString().notEmpty().optional(),
  body("company").isString().notEmpty().optional(),
  body("role").isString().notEmpty().optional(),
  body("gender").isString().notEmpty().optional(),
  body("state").isString().notEmpty().optional(),
  body("city").isString().notEmpty().optional(),
  body("locality").isString().notEmpty().optional(),
  body("smokingPreference").isString().notEmpty().optional(),
  body("foodPreference").isString().notEmpty().optional(),
  body("socialMediaLinks.*").isString().notEmpty().optional(),
  body("interests.*").isString().notEmpty().optional(),
  authenticate(),
  authorize("user"),
  upload.single("profilePicture"),
  catchAsync(async (req, res) => {
    //logic
    //TODO: add logic for file

    //@ts-expect-error
    const user = req.user;
    //@ts-expect-error
    const userId = req.user.id;
    //@ts-expect-error
    const userObj = await User.findById(req.user.id);
    if (!userObj) {
      throw new createHttpError.NotFound("user not found");
    }
    userObj.isProfileCreated = true;
    await userObj.save();
    let profile = await Profile.findOne({ userId });
    if (!profile) {
      profile = await Profile.create({ userId });
    }
    for (const prop in req.body) {
      profile[prop] = req.body[prop];
    }
    await profile.save();
    res.json(profile.toJSON());
  })
);

module.exports = userRouter;
