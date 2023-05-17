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
import { DishModule } from '@modules/dish/dish.module';
import { IngredientsModel } from '@modules/dish/database/ingredients.model';
import { DishModel } from '@modules/dish/database/dish.model';
import { DishPhotoModel } from '@modules/dish/database/dish-photo.model';

@Module({
  imports: [
    CqrsModule,
    TypeOrmModule.forRoot({
      ...databaseConfig,
      synchronize: true,
      entities: [UserModel, DishModel, IngredientsModel, DishPhotoModel],
    }),
    EventEmitterModule.forRoot(),
    UserModule,
    AuthModule,
    DishModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
