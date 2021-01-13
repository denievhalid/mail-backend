import User from "../models/User";
import asyncHandler from "express-async-handler";
import verifyPassword from "../helpers/verifyPassword";
import generateToken from "../helpers/generateToken";
import { UnprocessableEntity } from "../errors";

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user || !(await verifyPassword(password, user.password))) {
    throw new UnprocessableEntity();
  }

  const token = generateToken({ email });

  return res.status(200).json({ email, token });
});

const register = (req, res) => {
  return res.json();
};

export { create, login, register };
