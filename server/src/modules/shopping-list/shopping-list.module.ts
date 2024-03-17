import { Logger, Module, Provider } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileModule } from '@modules/file-handler/file.module';

import { ShoppingListModel } from '@modules/shopping-list/database/shopping-list.model';
import { GenerateShoppingListHttpController } from '@modules/shopping-list/queries/generate-shopping-list/generate-shopping-list.http.controller';
import { GenerateShoppingListQueryHandler } from '@modules/shopping-list/queries/generate-shopping-list/generate-shopping-list.query-handler';
import { ModifyShoppingListHttpController } from '@modules/shopping-list/commands/modify-shopping-list/modify-shopping-list.http.controller';
import { ModifyShoppingListService } from '@modules/shopping-list/commands/modify-shopping-list/modify-shopping-list.service';
import { GetUserShoppingListsHttpController } from './queries/get-user-shopping-lists/get-user-shopping-lists.http.controller';
import { GetUserShoppingListsQueryHandler } from './queries/get-user-shopping-lists/get-user-shopping-lists.query-handler';
import { GetShoppingListByIdHttpController } from './queries/get-shopping-list-by-id/get-shopping-list-by-id.http.controller';
import { GetShoppingListByIdQueryHandler } from './queries/get-shopping-list-by-id/get-shopping-list-by-id.query-handler';

const httpControllers = [
  GenerateShoppingListHttpController,
  ModifyShoppingListHttpController,
  GetUserShoppingListsHttpController,
  GetShoppingListByIdHttpController,
];

const queryHandlers: Provider[] = [
  GenerateShoppingListQueryHandler,
  GetUserShoppingListsQueryHandler,
  GetShoppingListByIdQueryHandler,
];
const commandHandlers: Provider[] = [ModifyShoppingListService];

const mappers: Provider[] = [];

@Module({
  imports: [
    FileModule,
    CqrsModule,
    TypeOrmModule.forFeature([ShoppingListModel]),
  ],
  controllers: [...httpControllers],
  providers: [Logger, ...queryHandlers, ...commandHandlers, ...mappers],
})
export class ShoppingListModule {}
