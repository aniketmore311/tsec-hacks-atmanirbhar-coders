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
    const user2ex = await User.findOne({ email: "yashkhatwani2002@gmail.com" });
    if (!user2ex) {
      const user2 = await User.create({
        firstname: "yash",
        lastname: "khatwani",
        email: "yashkhatwani2002@gmail.com",
        phoneNumber: "9284287810",
        emailOTP: "123",
        phoneNumberOTP: "123",
        isEmailVerified: true,
        isPhoneNumberVerified: true,
        password: hashedPassword,
        role: "user",
        isProfileCreated: true,
      });
      const profile = await Profile.create({
        userId: user2.id,
        age: 20,
        bio: "backend developer",
        city: "Mumbai",
        state: "Maharastra",
        country: "India",
        field: "Computer Engineering",
        dateOfBirth: "2002-04-04",
        foodPreference: "Veg",
        gender: "Male",
        type: "student",
        institute: "tsec bandra",
        interests: ["reading", "sports", "chess", "coding", "trekking"],
        locality: "vasai",
        maritalStatus: "Single",
        smokingPreference: "No",
        socialMediaLinks: [
          "www.facebook.com/profile/yash",
          "www.instagram.com/profile/aniket",
          "www.linkedin.com/profile/aniket",
        ],
      });
    }
    const user3ex = await User.findOne({ email: "akashkhatri1001@gmail.com" });
    if (!user3ex) {
      const user3 = await User.create({
        firstname: "akash",
        lastname: "khatri",
        email: "akashkhatri1001@gmail.com",
        phoneNumber: "9284287810",
        emailOTP: "123",
        phoneNumberOTP: "123",
        isEmailVerified: true,
        isPhoneNumberVerified: true,
        password: hashedPassword,
        role: "user",
        isProfileCreated: true,
      });
      const profile = await Profile.create({
        userId: user3.id,
        age: 20,
        bio: "backend developer",
        city: "Mumbai",
        state: "Maharastra",
        country: "India",
        field: "Computer Engineering",
        dateOfBirth: "2002-04-04",
        foodPreference: "Veg",
        gender: "Male",
        type: "student",
        institute: "tsec bandra",
        interests: ["sports", "coding", "trekking"],
        locality: "Ulhas Nagar",
        maritalStatus: "Single",
        smokingPreference: "No",
        socialMediaLinks: [
          "www.facebook.com/profile/akash",
          "www.instagram.com/profile/akash",
          "www.linkedin.com/profile/akash",
        ],
      });
    }
    const user4ex = await User.findOne({ email: "chinmaypalav1001@gmail.com" });
    if (!user4ex) {
      const user4 = await User.create({
        firstname: "chinmay",
        lastname: "palav",
        email: "chinmaypalav1001@gmail.com",
        phoneNumber: "9284487810",
        emailOTP: "123",
        phoneNumberOTP: "123",
        isEmailVerified: true,
        isPhoneNumberVerified: true,
        password: hashedPassword,
        role: "user",
        isProfileCreated: true,
      });
      const profile = await Profile.create({
        userId: user4.id,
        age: 20,
        bio: "backend developer",
        city: "Mumbai",
        state: "Maharastra",
        country: "India",
        field: "Computer Engineering",
        dateOfBirth: "2002-04-04",
        foodPreference: "Veg",
        gender: "Male",
        type: "student",
        institute: "tsec bandra",
        interests: ["sports", "coding", "trekking"],
        locality: "borivali",
        maritalStatus: "Single",
        smokingPreference: "No",
        socialMediaLinks: [
          "www.facebook.com/profile/akash",
          "www.instagram.com/profile/akash",
          "www.linkedin.com/profile/akash",
        ],
      });
    }
  }
  await mongoose.disconnect();
}
main().catch((err) => console.log(err));
