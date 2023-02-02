const mongoose = require("mongoose");

const VerificationSchema = new mongoose.Schema({
    user: { type: "ObjectId", ref: "User" },
    name: String,
    aadharno: String,
    dob: Date,
    gender: String,
});

const Verification = mongoose.model("Verification", VerificationSchema);

module.exports = Verification;
