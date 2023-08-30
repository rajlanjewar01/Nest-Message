import { NestFactory } from '@nestjs/core';
import { MessagesModule } from './messages/messages.module';
//validating a respose data
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  app.useGlobalPipes(
    new ValidationPipe()
  );
  await app.listen(3001);
}
bootstrap();
