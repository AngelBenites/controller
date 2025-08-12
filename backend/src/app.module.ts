import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { EmpleadosModule } from './empleados/empleados.module';
import { PlanillasModule } from './planillas/planillas.module'; // <-- Importa el módulo planillas

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PingController } from './ping.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',        
      port: 5432,
      username: 'tu_usuario',
      password: 'tu_contraseña',
      database: 'tu_base_de_datos',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    AuthModule,
    EmpleadosModule,
    PlanillasModule,   // <-- Agrega aquí el módulo planillas
    FinanzasModule  // <-- Luego agrega este cuando tengas listo ese módulo
  ],
  controllers: [
    AppController,
    PingController,
  ],
  providers: [AppService],
})
export class AppModule {}
