import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const schema = new mongoose.Schema({
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

schema.statics = {
  findByEmail(email) {
    return this.findOne({ email });
  },
};

schema.methods.verifyPassword = function (password) {
  return bcrypt.compare(this.password, password);
};

schema.methods.generateToken = function () {
  this.token = jwt.sign({ id: this.id });
  return this.save();
};

export default mongoose.model("User", schema);
