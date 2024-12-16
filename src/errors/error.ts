import { ErrorEnum } from './error.enum';

export class BusinessError extends Error {
  constructor(
    public error: ErrorEnum,
    public message: string,
    private payload?: any,
  ) {
    super(message);
  }
}
