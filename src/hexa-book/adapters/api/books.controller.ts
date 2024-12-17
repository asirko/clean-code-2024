import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Book } from '../../domain/book';
import { BookService } from '../../domain/book.service';
import { BookCreateDto } from './book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  async findAll(): Promise<Book[]> {
    return this.bookService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') bookId: string): Promise<Book> {
    return this.bookService.findById(bookId);
  }

  @Post()
  async createBook(@Body() book: BookCreateDto): Promise<Book> {
    return this.bookService.save(book);
  }

  @Delete(':id')
  async deleteBook(@Param('id') bookId: string): Promise<void> {
    return null;
  }
}
