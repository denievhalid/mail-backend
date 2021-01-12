import User from "../models/User";
import { UnprocessableEntityError } from "../errors";

class UserService {
  constructor(credentials) {
    this.credentials = credentials;
  }

  async login() {
    const { email, password } = this.credentials;

    const user = await User.findByEmail(email);

    if (!user) {
      throw new UnprocessableEntityError();
    }

    if (!(await user.verifyPassword(password))) {
      throw new UnprocessableEntityError();
    }

    await user.generateToken();

    return user;
  }
}

export default UserService;
