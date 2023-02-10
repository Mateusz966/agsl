import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { CqrsModule } from '@nestjs/cqrs';
import { UserModule } from '@modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from '@modules/user/database/user.model';

import { databaseConfig } from '@config/database.config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...databaseConfig,
      synchronize: true,
      entities: [UserModel],
    }),
    EventEmitterModule.forRoot(),
    UserModule,
    CqrsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
