import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { booksProviders } from './books.provider';

@Module({
  controllers: [BooksController],
  providers: [BooksService, ...booksProviders],
})
export class BooksModule {}
