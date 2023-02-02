//@ts-check
const express = require("express");
const authenticate = require("../middleware/authenticate");
const authorize = require("../middleware/authorize");

const adminRouter = express.Router();

adminRouter.get("/profile", authenticate(), authorize("admin"), (req, res) => {
  //@ts-ignore
  const user = req.user;
  return res.json(user);
});

module.exports = adminRouter;
