//@ts-check
require("dotenv").config();
const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const mongoose = require("mongoose");
const config = require("../config");
const Profile = require("../models/Profile");

async function main() {
  await mongoose.connect(config.app.mongoURI);
  const hashedPassword = bcryptjs.hashSync("test123", bcryptjs.genSaltSync(12));
  const user1 = await User.create({
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
  const profile1 = await Profile.create({
    userId: user1.id,
    age: 23,
    bio: "backend developer",
    city: "Thane",
    state: "Maharastra",
    country: "India",
    field: "Computer Engineering",
    dateOfBirth: "1999-11-03",
    foodPreference: "non-veg",
    gender: "male",
    type: "student",
    profilePictureURL:
      "https://scontent.fbom8-1.fna.fbcdn.net/v/t31.18172-8/15732054_1829744933948321_6912147507579640372_o.png?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=NqMfrZyunEkAX9lVA4R&_nc_oc=AQlOYEgINbsXv40PdRJrPLdSKGlQWwW1ALQNVYt3YiKDdJHZPwjwCeh-BCUPoSyS8_M&_nc_ht=scontent.fbom8-1.fna&oh=00_AfBCdN5ZG-o21IBPex2ZRQi2Mg_wvpDVEsTtMQBneQY8ng&oe=6403AB7B",
    institute: "tsec bandra",
    interests: ["reading", "travelling"],
    locality: "thane",
    maritalStatus: "single",
    smokingPreference: "no",
    socialMediaLinks: [
      "www.facebook.com/profile/aniket",
      "www.instagram.com/profile/aniket",
      "www.linkedin.com/profile/aniket",
    ],
  });
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
  const profile2 = await Profile.create({
    userId: user2.id,
    age: 20,
    bio: "react developer",
    city: "Mumbai",
    state: "Maharastra",
    country: "India",
    field: "Computer Engineering",
    dateOfBirth: "2002-04-04",
    foodPreference: "veg",
    gender: "male",
    type: "student",
    profilePictureURL:
      "https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp",
    institute: "tsec bandra",
    interests: ["reading", "sports", "chess", "coding", "trekking"],
    locality: "vasai",
    maritalStatus: "single",
    smokingPreference: "no",
    socialMediaLinks: [
      "www.facebook.com/profile/yash",
      "www.instagram.com/profile/yash",
      "www.linkedin.com/profile/yash",
    ],
  });
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
  const profile3 = await Profile.create({
    userId: user3.id,
    age: 20,
    bio: "front end developer",
    city: "Mumbai",
    state: "Maharastra",
    country: "India",
    field: "Computer Engineering",
    dateOfBirth: "2001-03-04",
    foodPreference: "non-veg",
    gender: "male",
    type: "student",
    profilePictureURL:
      "https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp",
    institute: "tsec bandra",
    interests: ["sports", "coding", "trekking"],
    locality: "Ulhas Nagar",
    maritalStatus: "single",
    smokingPreference: "no",
    socialMediaLinks: [
      "www.facebook.com/profile/akash",
      "www.instagram.com/profile/akash",
      "www.linkedin.com/profile/akash",
    ],
  });
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
  const profile4 = await Profile.create({
    userId: user4.id,
    age: 20,
    bio: "react developer developer",
    city: "Mumbai",
    state: "Maharastra",
    country: "India",
    field: "Computer Engineering",
    dateOfBirth: "2001-12-12",
    foodPreference: "non-veg",
    gender: "male",
    type: "student",
    profilePictureURL:
      "https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp",
    institute: "tsec bandra",
    interests: ["sports", "coding", "trekking"],
    locality: "borivali",
    maritalStatus: "single",
    smokingPreference: "no",
    socialMediaLinks: [
      "www.facebook.com/profile/chinmay",
      "www.instagram.com/profile/chinmay",
      "www.linkedin.com/profile/chinmay",
    ],
  });
  const user5 = await User.create({
    firstname: "john",
    lastname: "doe",
    email: "johndoe@gmail.com",
    phoneNumber: "1234567890",
    emailOTP: "123",
    phoneNumberOTP: "123",
    isEmailVerified: true,
    isPhoneNumberVerified: true,
    password: hashedPassword,
    role: "user",
    isProfileCreated: true,
  });
  const profile5 = await Profile.create({
    userId: user5.id,
    age: 20,
    bio: "accountant",
    city: "Delhi",
    state: "Delhi",
    country: "India",
    field: "Computer Engineering",
    dateOfBirth: "1995-12-12",
    foodPreference: "non-veg",
    gender: "male",
    type: "professional",
    profilePictureURL:
      "https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp",
    company: "kpmg",
    interests: ["sports", "coding", "trekking"],
    locality: "delhi",
    maritalStatus: "married",
    smokingPreference: "no",
    socialMediaLinks: [
      "www.facebook.com/profile/john",
      "www.instagram.com/profile/john",
      "www.linkedin.com/profile/john",
    ],
  });
  await mongoose.disconnect();
}
main().catch((err) => console.log(err));
