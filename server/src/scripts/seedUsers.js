require("dotenv").config();
const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const mongoose = require("mongoose");
const config = require("../config");
const Profile = require("../models/Profile");

async function main() {
  await mongoose.connect(config.app.mongoURI);
  const hashedPassword = bcryptjs.hashSync("test123", bcryptjs.genSaltSync(12));
  const user1ex = await User.findOne({
    email: "aniketavinashmore66@gmail.com",
  });
  if (!user1ex) {
    const user = await User.create({
      firstname: "aniket",
      lastname: "more",
      email: "aniketavinashmore66@gmail.com",
      phoneNumber: "9834360782",
      emailOTP: "123",
      phoneNumberOTP: "123",
      isEmailVerified: true,
      isPhoneNumberVerified: true,
      password: hashedPassword,
      role: "user",
      isProfileCreated: true,
    });
    const profile = await Profile.create({
      userId: user.id,
      age: 23,
      bio: "backend developer",
      city: "Mumbai",
      state: "Maharastra",
      country: "India",
      field: "Computer Engineering",
      dateOfBirth: "1999-11-03",
      foodPreference: "non-veg",
      gender: "male",
      type: "student",
      institute: "tsec bandra",
      interests: ["reading", "travelling"],
      locality: "thane",
      maritalStatus: "unmarried",
      smokingPreference: "non-smoker",
      socialMediaLinks: [
        "www.github.com/profile/aniket",
        "www.instagram.com/profile/aniket",
      ],
    });
  }
  await mongoose.disconnect();
}
main().catch((err) => console.log(err));
