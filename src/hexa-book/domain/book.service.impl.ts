import { BookRepositoryPort } from '../adapters/db/book.repository.port';
import { Book } from './book';
import { BookService } from './book.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BookServiceImpl implements BookService {
  constructor(private readonly bookRepository: BookRepositoryPort) {}

  async findAll(): Promise<Book[]> {
    return this.bookRepository.findAll();
  }
}
