import BaseError from "./BaseError";

class UnprocessableEntity extends BaseError {
  constructor() {
    super("Unprocessable Entity", 422);
  }
}

export default UnprocessableEntity;
