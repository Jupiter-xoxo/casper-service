import { ValidationError, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationException } from './exceptions/validation.exception';
import { HttpExceptionFilter } from './filters/http.exception.filter.util';
import { ValidationExceptionFilter } from './filters/validation.exception.filter.util';
import { HttpHeaderInterceptor } from './interceptors/http.header.interceptor.util';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log','error', 'warn'],
  });

  // app.useGlobalInterceptors(new HttpHeaderInterceptor());
  // app.useGlobalFilters(new HttpExceptionFilter(), new ValidationExceptionFilter());
  // app.useGlobalPipes(new ValidationPipe({
  //     skipMissingProperties: false,
  //     exceptionFactory: (errors: ValidationError[]) => {
  //         return new ValidationException(errors);
  //     }
  // }));
  await app.listen(3000);
}
bootstrap();
