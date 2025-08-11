import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PingController } from './ping.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    PingController // 👈 lo registras aquí
  ],
  providers: [AppService],
})
export class AppModule {}
