import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ShoppingListModel } from '../../database/shopping-list.model';
import { DataSource } from 'typeorm/data-source/DataSource';
import { GetShoppingListByIdQuery } from './get-shopping-list-by-id.query';

@QueryHandler(GetShoppingListByIdQuery)
export class GetShoppingListByIdQueryHandler
  implements IQueryHandler<GetShoppingListByIdQuery, ShoppingListModel>
{
  constructor(private dataSource: DataSource) {}

  async execute({ id }: GetShoppingListByIdQuery): Promise<ShoppingListModel> {
    const shoppingListRepo = this.dataSource.getRepository(ShoppingListModel);

    const shoppingLists = await shoppingListRepo.findOneBy({ id });

    return shoppingLists;
  }
}
