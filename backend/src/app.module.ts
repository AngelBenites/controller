// app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './auth/auth.module';
import { EmpleadosModule } from './empleados/empleados.module';
import { PlanillasModule } from './planillas/planillas.module';
// import { FinanzasModule } from './finanzas/finanzas.module'; // Aún no creada

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PingController } from './ping.controller';

@Module({
  imports: [
    // 1. Configuración de variables de entorno
    ConfigModule.forRoot({
      isGlobal: true, // Disponible en todos los módulos
    }),

    // 2. Conexión a la base de datos usando variables del .env
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get<string>('DATABASE_URL'),
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),

    // 3. Módulos del sistema
    AuthModule,
    EmpleadosModule,
    PlanillasModule,
    // FinanzasModule
  ],
  controllers: [
    AppController,
    PingController,
  ],
  providers: [AppService],
})
export class AppModule {}
