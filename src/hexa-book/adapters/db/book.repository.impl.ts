import { Injectable } from '@nestjs/common';
import { BookRepositoryPort } from './book.repository.port';
import { Book } from '../../domain/book';

@Injectable()
export class BookRepositoryImpl implements BookRepositoryPort {
  private books: Book[] = [
    { uuid: '1', title: 'Book 1', author: 'Author 1', publishedDate: new Date(), isArchived: false },
    { uuid: '2', title: 'Book 2', author: 'Author 2', publishedDate: new Date(), isArchived: true },
  ];

  async findAll(): Promise<Book[]> {
    return this.books;
  }

  async findByUuid(uuid: string): Promise<Book | null> {
    return this.books.find((book) => book.uuid === uuid) || null;
  }

  async findByTitle(title: string): Promise<Book | null> {
    return this.books.find((book) => book.title === title) || null;
  }

  async save(book: Book): Promise<Book> {
    this.books.push(book);
    return book;
  }

  async delete(id: string): Promise<void> {
    this.books = this.books.filter((book) => book.uuid !== id);
  }
}
