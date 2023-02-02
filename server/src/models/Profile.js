//@ts-check
const mongoose = require("mongoose");
const Types = mongoose.Schema.Types;

const profileSchema = new mongoose.Schema(
  {
    userId: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
    bio: {
      type: Types.String,
      required: true,
    },
    // could be student or professional
    type: {
      type: Types.String,
      required: true,
    },
    //only if user is student
    institute: {
      type: Types.String,
    },
    //only if user is student
    field: {
      type: Types.String,
    },
    //only if user is professional
    company: {
      type: Types.String,
    },
    //only if user is professional
    role: {
      type: Types.String,
    },
    gender: {
      type: Types.String,
      required: true,
    },
    profilePictureURL: {
      type: Types.String,
      required: true,
    },
    //smoking or non smoking
    smokingPreference: {
      type: Types.String,
      required: true,
    },
    foodPreference: {
      type: Types.String,
      required: true,
    },
    socialMediaLinks: [
      {
        type: Types.String,
        required: true,
      },
    ],
    interests: [
      {
        type: Types.String,
        required: true,
      },
    ],
    country: {
      type: Types.String,
      required: true,
      default: "India",
    },
    state: {
      type: Types.String,
      required: true,
    },
    locality: {
      type: Types.String,
      required: true,
    },
    schemaVersion: {
      type: Types.String,
      default: "v1",
    },
  },
  {
    timestamps: true,
  }
);

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
