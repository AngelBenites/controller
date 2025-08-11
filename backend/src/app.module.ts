import { Module } from '@nestjs/common';
import { PingController } from './ping.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, PingController],
  providers: [AppService],
})
export class AppModule {}
