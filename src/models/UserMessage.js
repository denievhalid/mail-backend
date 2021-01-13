import mongoose, { Schema, model } from "mongoose";

const schema = new Schema({
  message: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Message",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export default model("UserMessage", schema);
