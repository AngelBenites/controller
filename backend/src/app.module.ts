import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AuthModule } from './auth/auth.module';
import { EmpleadosModule } from './empleados/empleados.module';
import { PlanillasModule } from './planillas/planillas.module';
import { FinanzasModule } from './finanzas/finanzas.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PingController } from './ping.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Para no tener que importar ConfigModule en todos lados
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        url: config.get<string>('DATABASE_URL'),
        autoLoadEntities: true,
        synchronize: true, // ⚠️ Solo en desarrollo
      }),
    }),
    AuthModule,
    EmpleadosModule,
    PlanillasModule,
    //FinanzasModule,
  ],
  controllers: [AppController, PingController],
  providers: [AppService],
})
export class AppModule {}
