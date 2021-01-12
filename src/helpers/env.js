import dotenv from "dotenv";
dotenv.config();

const env = (name) => {
  return process.env[name.toUpperCase()];
};

export default env;
