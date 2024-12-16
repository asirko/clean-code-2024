import { Book } from '../../domain/book';

export abstract class BookRepositoryPort {
  abstract findAll(): Promise<Book[]>;
  abstract findByUuid(uuid: string): Promise<Book | null>;
  abstract findByTitle(title: string): Promise<Book | null>;
  abstract save(book: Omit<Book, 'uuid'>): Promise<Book>;
  abstract delete(uuid: string): Promise<void>;
}
