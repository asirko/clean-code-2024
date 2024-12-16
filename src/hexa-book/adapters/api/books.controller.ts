import { Controller, Get } from '@nestjs/common';
import { Book } from '../../domain/book';
import { BookService } from '../../domain/book.service';

@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  async findAll(): Promise<Book[]> {
    return this.bookService.findAll();
  }
}
