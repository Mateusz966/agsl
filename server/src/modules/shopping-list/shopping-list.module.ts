import { Logger, Module, Provider } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileModule } from '@modules/file-handler/file.module';

import { ShoppingListModel } from '@modules/shopping-list/database/shopping-list.model';
import { GenerateShoppingListHttpController } from '@modules/shopping-list/queries/generate-shopping-list/generate-shopping-list.http.controller';
import { GenerateShoppingListQueryHandler } from '@modules/shopping-list/queries/generate-shopping-list/generate-shopping-list.query-handler';
import {
  ModifyShoppingListHttpController
} from "@modules/shopping-list/queries/modify-shopping-list/modify-shopping-list.http.controller";

const httpControllers = [GenerateShoppingListHttpController, ModifyShoppingListHttpController];

const queryHandlers: Provider[] = [GenerateShoppingListQueryHandler];

const mappers: Provider[] = [];

@Module({
  imports: [
    FileModule,
    CqrsModule,
    TypeOrmModule.forFeature([ShoppingListModel]),
  ],
  controllers: [...httpControllers],
  providers: [Logger, ...queryHandlers, ...mappers],
})
export class ShoppingListModule {}
