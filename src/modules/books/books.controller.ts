import {
  Body,
  Controller,
  Delete,
  NotFoundException,
  Param,
  Post,
  Put,
  Get,
  UsePipes,
} from '@nestjs/common';
import { CreateBookDto } from './dto/createBook.dto';
import { Book } from './model/book.model';
import { BooksService } from './books.service';
import { UserValidationPipes } from 'src/pipes/userValidation.pipe';
import { UpdateBookDto } from './dto/updateBook.dto';
import { GetBooksDto } from './dto/getBooks.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}
  @UsePipes(UserValidationPipes)
  @Post()
  async createBook(@Body() book: CreateBookDto): Promise<Book> {
    return await this.booksService.create(book);
  }

  @Put(':id')
  async updateBook(
    @Param('id') id: number,
    @Body() book: UpdateBookDto,
  ): Promise<Book> {
    const { numberOfAffectedRows, updatedBook } =
      await this.booksService.update(id, book);
    if (numberOfAffectedRows === 0) {
      throw new NotFoundException("This Book doesn't exist");
    }
    return updatedBook;
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const deleted = await this.booksService.delete(id);
    if (deleted === 0) {
      throw new NotFoundException("This Book doesn't exist");
    }

    return 'Successfully deleted';
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Book> {
    const book = await this.booksService.findOneById(id);

    if (!book) {
      throw new NotFoundException("This Book doesn't exist");
    }

    return book;
  }

  @Get()
  getAllBooks(): Promise<GetBooksDto> {
    return this.booksService.getAllBooks();
  }
}
