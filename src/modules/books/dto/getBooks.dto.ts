import { Book } from '../model/book.model';

export class GetBooksDto {
  rows: Book[];
  count: number;
}
