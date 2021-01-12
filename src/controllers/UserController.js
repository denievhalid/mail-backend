import User from "../models/User";
import { UnprocessableEntity } from "../errors";

const create = (req, res) => {
  return res.json();
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      throw new UnprocessableEntity();
    }
  } catch (e) {
    return res.status().json(e);
  }
};

const register = (req, res) => {
  return res.json();
};

export { create, login, register };
