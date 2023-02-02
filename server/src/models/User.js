//@ts-check
const mongoose = require("mongoose");
const Types = mongoose.Schema.Types;
const bcryptjs = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: Types.String,
      required: true,
    },
    lastname: {
      type: Types.String,
      required: true,
    },
    email: {
      type: Types.String,
      unique: false,
      required: true,
    },
    emailOTP: {
      type: Types.String,
      required: true,
    },
    isEmailVerified: {
      type: Types.Boolean,
      default: false,
    },
    phoneNumber: {
      type: Types.String,
      // unique: true,
      unique: false,
      required: true,
    },
    isPhoneNumberVerified: {
      type: Types.Boolean,
      default: false,
    },
    phoneNumberOTP: {
      type: Types.String,
      required: true,
    },
    isProfileCreated: {
      type: Types.Boolean,
      default: false,
    },
    isKYCDone: {
      type: Types.Boolean,
      default: false,
    },
    password: {
      type: Types.String,
      required: true,
    },
    role: {
      type: Types.String,
      default: "user",
    },
    schemaVersion: {
      type: Types.String,
      default: "v1",
    },
  },
  {
    methods: {
      toRespDTO: function () {
        return {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          isEmailVerified: this.isEmailVerified,
          phoneNumber: this.phoneNumber,
          isPhoneNumberVerified: this.isPhoneNumberVerified,
          isProfileCreated: this.isProfileCreated,
          role: this.role,
          isKYCDone: this.isKYCDone,
          id: this.id,
        };
      },
      comparePassword: function (password) {
        return bcryptjs.compare(password, this.password);
      },
    },
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
