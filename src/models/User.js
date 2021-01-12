import mongoose, { Schema, model } from "mongoose";

const schema = new Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  token: {
    type: String,
  },
});

export default model("User", schema);
