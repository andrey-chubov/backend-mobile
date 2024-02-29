import { Inject, Injectable } from '@nestjs/common';
import { BOOK_REPOSITORY } from 'src/core/constants';
import { Book } from './model/book.model';
import { CreateBookDto } from './dto/createBook.dto';
import { UpdateBookDto } from './dto/updateBook.dto';

@Injectable()
export class BooksService {
  constructor(
    @Inject(BOOK_REPOSITORY) private readonly bookRepository: typeof Book,
  ) {}

  async create(book: CreateBookDto): Promise<Book> {
    return await this.bookRepository.create<Book>(book);
  }
  async update(id: number, book: UpdateBookDto) {
    const [numberOfAffectedRows, [updatedBook]] =
      await this.bookRepository.update(
        { ...book },
        { where: { id }, returning: true },
      );
    return { numberOfAffectedRows, updatedBook };
  }

  async delete(id: number) {
    return await this.bookRepository.destroy({ where: { id } });
  }

  async findOneById(id: number): Promise<Book> {
    return await this.bookRepository.findOne<Book>({ where: { id } });
  }

  async getAllBooks() {
    return await this.bookRepository.findAndCountAll();
  }
}
