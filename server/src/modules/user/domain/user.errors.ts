import { ExceptionBase } from '@libs/exceptions/exception.base';

export class UserAlreadyExistsError extends ExceptionBase {
  static readonly message = 'User already exists';

  public readonly code = 'USER.ALREADY_EXISTS';

  constructor() {
    super(UserAlreadyExistsError.message);
  }
}
