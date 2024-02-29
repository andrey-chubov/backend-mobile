import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { HttpExceptionFilter } from './filters/http.fexceptions.filter';
import { ValidationFilter } from './filters/validation.filters';

async function bootstrap() {
  const logger = new Logger('Main APP');
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    credentials: true,
    origin: true,
  });
  // global prefix
  app.setGlobalPrefix('api/v1');
  app.useGlobalFilters(new HttpExceptionFilter(), new ValidationFilter());
  await app.listen(3000);
  logger.log('Server started on port: 3000');
}
bootstrap();
