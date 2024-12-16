import { Book } from './book';

export abstract class BookService {
  abstract findAll(): Promise<Book[]>;
  abstract addBook(createBook: Omit<Book, 'uuid'>): Promise<Book>;
  abstract updateBook(uuid: string, updateBook: Omit<Book, 'uuid'>): Promise<Book>;
  abstract deleteBook(uuid: string): Promise<void>;
}
