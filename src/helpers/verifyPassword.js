import bcrypt from "bcryptjs";

const verifyPassword = (string, hash) => {
  return bcrypt.compare(string, hash);
};

export default verifyPassword;
