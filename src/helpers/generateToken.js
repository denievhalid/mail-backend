import jwt from "jsonwebtoken";
import env from "./env";

function generateToken(payload) {
  return jwt.sign(payload, env("jwt_secret"));
}

export default generateToken;
