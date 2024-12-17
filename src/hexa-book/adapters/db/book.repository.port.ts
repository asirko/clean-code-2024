import { Book } from '../../domain/book';

export abstract class BookRepositoryPort {
  abstract findAll(): Promise<Book[]>;
  abstract findById(id: string): Promise<Book | null>;
  abstract save(book: Omit<Book, 'id'>): Promise<Book>;
  abstract delete(id: string): Promise<void>;
}
