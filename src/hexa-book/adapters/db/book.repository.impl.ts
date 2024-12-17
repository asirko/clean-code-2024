import { Injectable } from '@nestjs/common';
import { BookRepositoryPort } from './book.repository.port';
import { Book } from '../../domain/book';

@Injectable()
export class BookRepositoryImpl implements BookRepositoryPort {
  private books: Book[] = [
    { id: '1', title: 'Book 1', author: 'Author 1', publishedDate: new Date() },
    { id: '2', title: 'Book 2', author: 'Author 2', publishedDate: new Date() },
  ];

  async findAll(): Promise<Book[]> {
    return this.books;
  }

  async findById(id: string): Promise<Book | null> {
    return this.books.find((book) => book.id === id) || null;
  }

  async save(book: Omit<Book, 'id'>): Promise<Book> {
    let id: string;
    do {
      id = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10)).join('');
    } while (this.books.some((book) => book.id === id));

    const bookWithId = { id, ...book };
    this.books.push(bookWithId);
    return bookWithId;
  }

  async delete(id: string): Promise<void> {
    this.books = this.books.filter((book) => book.id !== id);
  }
}
