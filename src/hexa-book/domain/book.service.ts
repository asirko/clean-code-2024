import { Book } from './book';

export abstract class BookService {
  abstract findAll(): Promise<Book[]>;
  abstract findById(id: string): Promise<Book>;
  abstract save(book: Omit<Book, 'id'>): Promise<Book>;
}
