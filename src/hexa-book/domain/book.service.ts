import { Book } from './book';

export abstract class BookService {
  abstract findAll(): Promise<Book[]>;
}