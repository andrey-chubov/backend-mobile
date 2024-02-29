import { Type } from 'class-transformer';
import { IsInt, Max, Min } from 'class-validator';

export class GetParamsDto {
  @IsInt()
  @Type(() => Number)
  @Min(5, {
    message: `Минимальное количество книг на странице - 5!`,
  })
  @Max(10, {
    message: `Максимальное количество товаров на странице - 10!`,
  })
  limit: number;

  @IsInt()
  @Type(() => Number)
  @Min(0, {
    message: `Минимальная страница для отображения - 0!`,
  })
  page: number;
}
