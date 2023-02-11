import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { CqrsModule } from '@nestjs/cqrs';
import { UserModule } from '@modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from '@modules/user/database/user.model';

import { databaseConfig } from '@config/database.config';
import { AuthModule } from '@modules/auth/auth.module';

@Module({
  imports: [
    CqrsModule,
    TypeOrmModule.forRoot({
      ...databaseConfig,
      synchronize: true,
      entities: [UserModel],
    }),
    EventEmitterModule.forRoot(),
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
