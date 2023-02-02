//@ts-check
const mongoose = require("mongoose");
const Types = mongoose.Schema.Types;

const chatSchema = new mongoose.Schema({
  p1: {
    type: Types.ObjectId,
    required: true,
  },
  p2: {
    type: Types.ObjectId,
    required: true,
  },
  messages: [
    {
      sender: {
        type: Types.ObjectId,
        required: true,
      },
      receiver: {
        type: Types.ObjectId,
        required: true,
      },
      content: {
        type: Types.String,
        required: true,
      },
    },
  ],
});

const Chat = mongoose.model("Chat", chatSchema);
