import { Logger, Module, Provider } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateDishHttpController } from '@modules/dish/commands/create-dish/create-dish.http.controller';
import { DishModel } from '@modules/dish/database/dish.model';
import { CreateDishService } from '@modules/dish/commands/create-dish/create-dish.service';
import { IngredientsModel } from '@modules/dish/database/ingredients.model';
import { FileModule } from '@modules/file-uploader/file.module';
import { DishPhotoModel } from '@modules/dish/database/dish-photo.model';
import { DishModelRepository } from '@modules/dish/database/dish-model.repository';
import { DishMapper } from '@modules/dish/dish.mapper';

const httpControllers = [CreateDishHttpController];

const commandHandlers: Provider[] = [CreateDishService];

const mappers: Provider[] = [];

@Module({
  imports: [
    FileModule,
    CqrsModule,
    TypeOrmModule.forFeature([DishModel, IngredientsModel, DishPhotoModel]),
  ],
  controllers: [...httpControllers],
  providers: [
    DishModelRepository,
    DishMapper,
    Logger,
    ...commandHandlers,
    ...mappers,
  ],
})
export class DishModule {}
