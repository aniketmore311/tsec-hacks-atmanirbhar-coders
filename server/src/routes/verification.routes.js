//@ts-check
const Verification = require("../models/VerificationRequest");

const express = require("express");

const verificationRouter = express.Router();

verificationRouter.get("/", async (req, res, next) => {
    try {
        const result = await Verification.find();
        if (!result) res.send("error");
        res.json(result);
    } catch (err) {
        next(err);
    }
});

verificationRouter.post("/", async (req, res, next) => {
    try {
        const result = new Verification(req.body);
        await result.save(() => res.json(result));
        console.log(result);
    } catch (err) {
        next(err);
    }
});

module.exports = verificationRouter;
