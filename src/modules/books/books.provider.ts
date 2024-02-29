import { BOOK_REPOSITORY } from '../../core/constants';
import { Book } from './model/book.model';

export const booksProviders = [
  {
    provide: BOOK_REPOSITORY,
    useValue: Book,
  },
];
