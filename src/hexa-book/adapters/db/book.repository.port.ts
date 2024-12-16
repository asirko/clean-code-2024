import { Book } from '../../domain/book';

export abstract class BookRepositoryPort {
  abstract findAll(): Promise<Book[]>;
  abstract findById(id: string): Promise<Book | null>;
  abstract save(book: Book): Promise<void>;
  abstract delete(id: string): Promise<void>;
}
