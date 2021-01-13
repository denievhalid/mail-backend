import User from "../models/User";
import { UnprocessableEntity } from "../errors";
import verifyPassword from "../helpers/verifyPassword";
import generateToken from "../helpers/generateToken";

const create = (req, res) => {
  return res.json();
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || !(await verifyPassword(password, user.password))) {
      throw new UnprocessableEntity();
    }

    const token = generateToken({ email });

    return res.status(200).json(token);
  } catch (e) {
    return res.sendStatus(422);
  }
};

const register = (req, res) => {
  return res.json();
};

export { create, login, register };
