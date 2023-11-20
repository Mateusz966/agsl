import { Logger, Module, Provider } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileModule } from '@modules/file-handler/file.module';

import { ShoppingListModel } from '@modules/shopping-list/database/shopping-list.model';
import { GenerateShoppingListHttpController } from '@modules/shopping-list/queries/generate-shopping-list/generate-shopping-list.http.controller';
import { GenerateShoppingListQueryHandler } from '@modules/shopping-list/queries/generate-shopping-list/generate-shopping-list.query-handler';

const httpControllers = [GenerateShoppingListHttpController];

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
