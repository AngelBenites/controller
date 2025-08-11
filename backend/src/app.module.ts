import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PingController } from './ping.controller';

@Module({
  imports: [AuthModule,],
  controllers: [
    AppController,
    PingController // 👈 lo registras aquí
  ],
  providers: [AppService],
})
export class AppModule {}
