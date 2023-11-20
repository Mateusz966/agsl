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
import { GetUserDishesHttpController } from '@modules/dish/queries/get-user-dishes/get-user-dishes.http.controller';
import { GetUserDishesQueryHandler } from '@modules/dish/queries/get-user-dishes/get-user-dishes.query-handler';
import { GenerateShoppingListHttpController } from '@modules/shopping-list/queries/generate-shopping-list/generate-shopping-list.http.controller';
import { GenerateShoppingListQueryHandler } from '@modules/shopping-list/queries/generate-shopping-list/generate-shopping-list.query-handler';
import {IngredientsModelRepository} from "@modules/dish/database/ingredients-model.repository";
import {ShoppingListModel} from "@modules/dish/database/shopping-list.model";

const httpControllers = [
  CreateDishHttpController,
  GetDishByIdHttpController,
  EditDishHttpController,
  GetUserDishesHttpController,
  GenerateShoppingListHttpController,
];

const commandHandlers: Provider[] = [CreateDishService, EditDishService];

const queryHandlers: Provider[] = [
  GetDishByIdQueryHandler,
  GetUserDishesQueryHandler,
  GenerateShoppingListQueryHandler,
];

const mappers: Provider[] = [];

@Module({
  imports: [
    FileModule,
    CqrsModule,
    TypeOrmModule.forFeature([DishModel, IngredientsModel, DishPhotoModel, ShoppingListModel]),
  ],
  controllers: [...httpControllers],
  providers: [
    DishModelRepository,
    DishPhotoModelRepository,
    IngredientsModelRepository,
    DishMapper,
    Logger,
    ...commandHandlers,
    ...queryHandlers,
    ...mappers,
  ],
})
export class DishModule {}
