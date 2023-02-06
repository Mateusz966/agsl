import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { CqrsModule } from '@nestjs/cqrs';
import { UserModule } from '@modules/user/user.module';
import { MikroOrmModule } from '@mikro-orm/nestjs';

@Module({
  imports: [
    MikroOrmModule.forRoot({
      autoLoadEntities: true,
      dbName: 'postgres',
      user: 'postgres',
      password: 'postgres',
      type: 'postgresql',
    }),
    EventEmitterModule.forRoot(),
    UserModule,
    CqrsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
