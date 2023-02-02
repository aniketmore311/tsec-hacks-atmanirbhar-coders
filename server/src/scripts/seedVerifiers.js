require("dotenv").config();
const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const mongoose = require("mongoose");
const config = require("../config");

async function main() {
  await mongoose.connect(config.app.mongoURI);
  const hashedPassword = bcryptjs.hashSync("test123", bcryptjs.genSaltSync(12));
  const user1ex = await User.findOne({
    email: "aniketavinashmore33@gmail.com",
  });
  if (!user1ex) {
    const user = await User.create({
      firstname: "aniket",
      lastname: "more",
      email: "aniketavinashmore33@gmail.com",
      phoneNumber: "7507805454",
      emailOTP: "123",
      phoneNumberOTP: "123",
      isEmailVerified: true,
      isPhoneNumberVerified: true,
      password: hashedPassword,
      role: "verifier",
    });
  }
  await mongoose.disconnect();
}
main().catch((err) => console.log(err));
