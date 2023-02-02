//@ts-check
const express = require("express");
const authenticate = require("../middleware/authenticate");
const Chat = require("../models/Chat");
const { catchAsync } = require("../utils");

const chatsRouter = express.Router();

chatsRouter.get(
  "/:userId",
  authenticate(),
  catchAsync(async (req, res) => {
    const userId = req.params.userId;
    //@ts-expect-error
    const id = req.user.id;
    const chat1 = Chat.findOne({
      p1: id,
      p2: userId,
    });
    if (!chat1) {
      const chat2 = Chat.findOne({
        p1: id,
        p2: userId,
      });
      if(!chat2){
        
      }
    }
  })
);

module.exports = chatsRouter;
