import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomeController } from './home/home.controller';
import { HomeService } from './home/home.service';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HomeModule, AuthModule, PrismaModule, ConfigModule.forRoot({
    isGlobal: true
  })],
  controllers: [AppController, HomeController],
  providers: [AppService, HomeService],
})
export class AppModule {}
