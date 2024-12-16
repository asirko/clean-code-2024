import { BookRepositoryPort } from '../adapters/db/book.repository.port';
import { Book } from './book';
import { BookService } from './book.service';
import { Injectable } from '@nestjs/common';
import { BookAlreadyExists, BookCannotBeUpdated, BookNotFound } from './book.error';

@Injectable()
export class BookServiceImpl implements BookService {
  constructor(private readonly bookRepository: BookRepositoryPort) {}

  async findAll(): Promise<Book[]> {
    return this.bookRepository.findAll();
  }

  async addBook(createBook: Book): Promise<Book> {
    // test if the book already exists
    const existingBook = await this.bookRepository.findByTitle(createBook.title);
    if (existingBook) {
      throw new BookAlreadyExists();
    }

    return this.bookRepository.save(createBook);
  }

  async updateBook(uuid: string, updateBook: Omit<Book, 'uuid'>): Promise<Book> {
    const book = await this.bookRepository.findByUuid(uuid);

    if (!book) {
      throw new BookNotFound(`Book with UUID ${uuid} not found.`);
    }

    if (book.isArchived) {
      throw new BookCannotBeUpdated(`Cannot update the book with UUID ${uuid} because it is archived.`);
    }

    return this.bookRepository.save({ ...book, ...updateBook });
  }

  async deleteBook(uuid: string): Promise<void> {
    const book = await this.bookRepository.findByUuid(uuid);

    if (!book) {
      throw new BookNotFound(`Book with UUID ${uuid} not found.`);
    }

    await this.bookRepository.delete(uuid);
  }
}
