import { Logger, Module, Provider } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateDishHttpController } from '@modules/dish/commands/create-dish/create-dish.http.controller';
import { DishModel } from '@modules/dish/database/dish.model';
import { CreateDishService } from '@modules/dish/commands/create-dish/create-dish.service';
import { IngredientsModel } from '@modules/dish/database/ingredients.model';
import { FileModule } from '@modules/file-handler/file.module';
import { DishPhotoModel } from '@modules/dish/database/dish-photo.model';
import { DishModelRepository } from '@modules/dish/database/dish-model.repository';
import { DishMapper } from '@modules/dish/dish.mapper';
import { DishPhotoModelRepository } from '@modules/dish/database/dish-photo-model.repository';
import { GetDishByIdHttpController } from '@modules/dish/queries/get-dish-by-id/get-dish-by-id.http.controller';
import { GetDishByIdQueryHandler } from '@modules/dish/queries/get-dish-by-id/get-dish-by-id.query-handler';
import { EditDishHttpController } from '@modules/dish/commands/edit-dish/edit-dish.http.controller';
import { EditDishService } from '@modules/dish/commands/edit-dish/edit-dish.service';
import { GetUserDishesTsHttpController } from '@modules/dish/queries/get-user-dishes/get-user-dishes.ts.http.controller';
import { GetUserDishesQueryHandler } from '@modules/dish/queries/get-user-dishes/get-user-dishes.query-handler';

const httpControllers = [
  CreateDishHttpController,
  GetDishByIdHttpController,
  EditDishHttpController,
  GetUserDishesTsHttpController,
];

const commandHandlers: Provider[] = [CreateDishService, EditDishService];

const queryHandlers: Provider[] = [
  GetDishByIdQueryHandler,
  GetUserDishesQueryHandler,
];

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
    DishPhotoModelRepository,
    DishMapper,
    Logger,
    ...commandHandlers,
    ...queryHandlers,
    ...mappers,
  ],
})
export class DishModule {}
