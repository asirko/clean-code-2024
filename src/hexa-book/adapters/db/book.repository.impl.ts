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

  async save(book: Book): Promise<void> {
    this.books.push(book);
  }

  async delete(id: string): Promise<void> {
    this.books = this.books.filter((book) => book.id !== id);
  }
}
