//@ts-check
const Verification = require("../models/VerificationRequest");
const User = require("../models/User");
const express = require("express");

const verificationApproveRouter = express.Router();

verificationApproveRouter.post("/", async (req, res, next) => {
    try {
        const id = req.body.verificationId;

        const temp = await Verification.findById(id);
        console.log(temp.user);
        const user = await User.findById(temp.user);
        console.log(user);
        user.isKYCDone = true;
        await user.save();
        // const result = new Verification(req.body);
        // await result.save(() => res.json(result));
    } catch (err) {
        next(err);
    }
});

module.exports = verificationApproveRouter;
