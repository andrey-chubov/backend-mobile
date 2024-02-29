import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty({ message: 'Название не должно быть пустым!' })
  title: string;

  @IsString()
  @IsNotEmpty({ message: 'Автор должен быть указан!' })
  author: string;

  @IsNumber()
  @IsNotEmpty({ message: 'Год должен быть указан!' })
  year_of_publication: number;
}
