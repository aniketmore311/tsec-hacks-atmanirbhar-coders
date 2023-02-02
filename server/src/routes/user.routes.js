//@ts-check
const express = require("express");
const authenticate = require("../middleware/authenticate");
const authorize = require("../middleware/authorize");

const userRouter = express.Router();

userRouter.get("/profile", authenticate(), authorize("user"), (req, res) => {
  //@ts-ignore
  const user = req.user;
  return res.json({
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  });
});

module.exports = userRouter;
