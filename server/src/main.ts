import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors({
    origin: [
      'http://localhost:3000',
      'https://server-test-home-luigi18.vercel.app',
      '*',
    ],
    allowedHeaders: ['Accept', 'Content-Type', '*'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  });

  await app.listen(process.env.PORT || 3000);
  console.log(`server running on PORT ${process.env.PORT || 3000}`);
}
bootstrap();
