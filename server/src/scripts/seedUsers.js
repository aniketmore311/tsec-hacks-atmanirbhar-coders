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
    bio: "seasoned software engineer with 10 years of experience in the industry. He has a strong background in developing and maintaining software systems using various programming languages and technologies",
    city: "Thane",
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
    bio: "is a motivated student currently pursuing a degree in computer science. he is highly interested in software development and has already gained hands-on experience through various projects and internships.",
    city: "Chennai",
    state: "Maharastra",
    country: "India",
    field: "Computer Engineering",
    dateOfBirth: "2002-04-04",
    foodPreference: "veg",
    gender: "male",
    type: "student",
    institute: "tsec bandra",
    interests: [
      "reading",
      "sports",
      "chess",
      "coding",
      "trekking",
      "travelling",
    ],
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
    bio: "motivated student studying computer science. My passion lies in software development and I've gained hands-on experience through various projects and internships. I am eager to continue learning",
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
    bio: "I am a software engineer with 5 years of experience in the industry. My expertise lies in designing and developing efficient software systems using multiple programming languages and technologies",
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
    interests: ["sports", "coding", "trekking", "reading", "travelling"],
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
    age: 27,
    bio: "accountant",
    city: "Delhi",
    state: "Delhi",
    country: "India",
    field: "finance",
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
    smokingPreference: "yes",
    socialMediaLinks: [
      "www.facebook.com/profile/john",
      "www.instagram.com/profile/john",
      "www.linkedin.com/profile/john",
    ],
  });
  const user6 = await User.create({
    firstname: "jane",
    lastname: "doe",
    email: "janedoe@gmail.com",
    phoneNumber: "1234567890",
    emailOTP: "123",
    phoneNumberOTP: "123",
    isEmailVerified: true,
    isPhoneNumberVerified: true,
    password: hashedPassword,
    role: "user",
    isProfileCreated: true,
  });
  const profile6 = await Profile.create({
    userId: user6.id,
    age: 27,
    bio: "accountant",
    city: "Delhi",
    state: "Delhi",
    country: "India",
    field: "finance",
    dateOfBirth: "1995-12-12",
    foodPreference: "non-veg",
    gender: "female",
    type: "professional",
    company: "kpmg",
    interests: ["sports", "coding", "trekking"],
    locality: "delhi",
    maritalStatus: "married",
    smokingPreference: "yes",
    socialMediaLinks: [
      "www.facebook.com/profile/jane",
      "www.instagram.com/profile/jane",
      "www.linkedin.com/profile/jane",
    ],
  });
  await mongoose.disconnect();
}
main().catch((err) => console.log(err));
