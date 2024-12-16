import { Module } from '@nestjs/common';
import { BookRepositoryImpl } from './adapters/db/book.repository.impl';
import { BooksController } from './adapters/api/books.controller';
import { BookRepositoryPort } from './adapters/db/book.repository.port';
import { BookService } from './domain/book.service';
import { BookServiceImpl } from './domain/book.service.impl';

@Module({
  controllers: [BooksController],
  providers: [
    { provide: BookService, useClass: BookServiceImpl },
    { provide: BookRepositoryPort, useClass: BookRepositoryImpl },
  ],
})
export class BooksModule {}
