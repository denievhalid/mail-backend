import mongoose, { Schema, model } from "mongoose";

const schema = new Schema({
  body: {
    type: String,
  },
  subject: {
    type: String,
  },
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export default model("Message", schema);
