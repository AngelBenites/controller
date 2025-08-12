import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configurar CORS para aceptar peticiones desde tu frontend
  app.enableCors({
    origin: 'https://frontend.hwperu.com',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Validación global para que los DTOs funcionen
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,             // elimina campos extra
    forbidNonWhitelisted: true,  // error si llegan campos no permitidos
    transform: true,             // convierte payload a clases DTO
  }));

  await app.listen(process.env.PORT || 4000);
  console.log(`Servidor corriendo en puerto ${process.env.PORT || 4000}`);
}
bootstrap();
