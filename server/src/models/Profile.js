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
    },
    age: {
      type: Types.Number,
    },
    dateOfBirth: {
      type: Types.String,
    },
    maritalStatus: {
      type: Types.String,
    },
    // could be student or professional
    type: {
      type: Types.String,
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
    },
    profilePictureURL: {
      type: Types.String,
    },
    //smoking or non smoking
    smokingPreference: {
      type: Types.String,
    },
    foodPreference: {
      type: Types.String,
    },
    socialMediaLinks: [
      {
        type: Types.String,
      },
    ],
    interests: [
      {
        type: Types.String,
      },
    ],
    country: {
      type: Types.String,
      default: "India",
    },
    state: {
      type: Types.String,
    },
    city: {
      type: Types.String,
    },
    locality: {
      type: Types.String,
    },
    schemaVersion: {
      type: Types.String,
      default: "v1",
    },
  },
  {
    methods: {
      getPercentageMatch: (otherProfile) => {
      },
    },
    timestamps: true,
  }
);

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
