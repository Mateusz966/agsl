import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { contentParser } from 'fastify-file-interceptor';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      logger: true,
    }),
    {
      cors: {
        origin: ['http://localhost:3000'],
        credentials: true,
      },
    },
  );
  await app.register(contentParser);
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));
  const options = new DocumentBuilder().build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3002, '0.0.0.0');
}
bootstrap();
