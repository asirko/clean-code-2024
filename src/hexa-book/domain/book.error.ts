import { ErrorEnum } from '../../errors/error.enum';
import { BusinessError } from '../../errors/error';

export class BookAlreadyExists extends BusinessError {
  constructor(payload?: any) {
    super(ErrorEnum.BOOK_ALREADY_EXISTS, 'A book with the same title already exist', payload);
  }
}
export class BookNotFound extends BusinessError {
  constructor(message: string, payload?: any) {
    super(ErrorEnum.BOOK_NOT_FOUND, message, payload);
  }
}
export class BookCannotBeUpdated extends BusinessError {
  constructor(message: string, payload?: any) {
    super(ErrorEnum.BOOK_CANNOT_BE_UPDATED, message, payload);
  }
}
