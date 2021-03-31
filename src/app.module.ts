import { GameModule } from './game/game.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { DatabaseConfig } from './configs/database.config';
import { CustomerModule } from './customer/customer.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: process.env.NODE_ENV ? `${process.env.NODE_ENV}.env` : 'local.env',
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConfig
    }),
    AuthModule,
    CustomerModule,
    GameModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
