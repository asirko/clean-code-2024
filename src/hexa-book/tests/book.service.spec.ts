import { Test, TestingModule } from '@nestjs/testing';
import { BookRepositoryPort } from '../adapters/db/book.repository.port';
import { BookService } from '../domain/book.service';
import { BookServiceImpl } from '../domain/book.service.impl';

const mockRepository = (): BookRepositoryPort => ({
  findAll: jest.fn(),
  findByUuid: jest.fn(),
  findByTitle: jest.fn(),
  save: jest.fn(),
  delete: jest.fn(),
});

describe('BookService', () => {
  let service: BookService;
  let repository: BookRepositoryPort;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        { provide: BookService, useClass: BookServiceImpl },
        { provide: BookRepositoryPort, useValue: mockRepository() },
      ],
    }).compile();

    service = module.get<BookService>(BookService);
    repository = module.get<BookRepositoryPort>(BookRepositoryPort);
  });

  describe('addBook', () => {
    it('should add a book successfully', async () => {
      const createBookDto = { title: 'New Book', author: 'Author', isArchived: false, publishedDate: new Date() };
      jest.spyOn(repository, 'findByTitle').mockImplementation(() => Promise.resolve(null));
      jest.spyOn(repository, 'save').mockImplementation(() => Promise.resolve({ uuid: 'toto', ...createBookDto }));

      const result = await service.addBook(createBookDto);
      expect(repository.findByTitle).toHaveBeenCalledWith(createBookDto.title);
      expect(repository.save).toHaveBeenCalledWith(createBookDto);
      expect(result.uuid).toEqual('toto');
    });
  });
});
