import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { EmpleadosModule } from './empleados/empleados.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PingController } from './ping.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',        // Ajusta aquí
      port: 5432,
      username: 'tu_usuario',
      password: 'tu_contraseña',
      database: 'tu_base_de_datos',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,        // solo para desarrollo
    }),
    AuthModule,
    EmpleadosModule,
  ],
  controllers: [
    AppController,
    PingController,
  ],
  providers: [AppService],
})
export class AppModule {}
