import BaseError from "./BaseError";

class UnprocessableEntityError extends BaseError {
  constructor() {
    super("Unprocessable Entity", 422);
  }
}

export default UnprocessableEntityError;
