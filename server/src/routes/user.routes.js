//@ts-check
const express = require("express");
const createHttpError = require("http-errors");
const authenticate = require("../middleware/authenticate");
const authorize = require("../middleware/authorize");
const Profile = require("../models/Profile");
const { catchAsync } = require("../utils");
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

    const profile = await Profile.findOne({ userId: user.id });
    if (!profile) {
      throw new createHttpError.NotFound("user's profile not found");
    }
    return res.json(profile.toJSON());
  })
);

userRouter.post(
  "/profile",
  body("bio").isString().notEmpty(),
  body("type").isString().notEmpty(),
  body("gender").isString().notEmpty(),
  body("state").isString().notEmpty(),
  body("locality").isString().notEmpty(),
  body("smokingPreference").isString().notEmpty(),
  body("foodPreference").isString().notEmpty(),
  body("socialMediaLinks.*").isString().notEmpty(),
  body("interests.*").isString().notEmpty(),
  authenticate(),
  authorize("user"),
  upload.single("profilePicture"),
  catchAsync(async (req, res) => {
    const {
      bio,
      type,
      gender,
      state,
      locality,
      smokingPreference,
      foodPreference,
      socialMediaLinks,
      interests,
    } = req.body;

    //validation
    if (type == "student") {
      if (!req.body.institute) {
        throw new createHttpError.BadRequest(
          "institute is required for student"
        );
      }
      if (!req.body.field) {
        throw new createHttpError.BadRequest("field is required for student");
      }
    } else if (type === "professional") {
      if (!req.body.company) {
        throw new createHttpError.BadRequest(
          "company is required for professional"
        );
      }
      if (!req.body.role) {
        throw new createHttpError.BadRequest(
          "role is required for professional"
        );
      }
    } else {
      throw new createHttpError.BadRequest(
        "invalid user type only student and professional are allowed"
      );
    }

    //logic

    //@ts-expect-error
    const user = req.user;
    //@ts-expect-error
    const userId = req.user.id;
    //@ts-expect-error
    const userObj = await User.findById(req.user.id);
    if (!userObj) {
      throw new createHttpError.NotFound("user not found");
    }
    let profile;
    if (type == "student") {
      profile = Profile.create({
        userId,
        bio,
        type,
        institute: req.body.institute,
        field: req.body.field,
        gender,
        state,
        locality,
        smokingPreference,
        foodPreference,
        socialMediaLinks,
        interests,
      });
    }
    if (type == "professional") {
      profile = Profile.create({
        userId,
        bio,
        type,
        company: req.body.company,
        role: req.body.role,
        gender,
        smokingPreference,
        foodPreference,
        socialMediaLinks,
        interests,
      });
    }

    //if student must have institute and field
    //if professional must have company or role
  })
);

module.exports = userRouter;
