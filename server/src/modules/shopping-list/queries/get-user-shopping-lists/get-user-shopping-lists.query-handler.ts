import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetUserShoppingListsQuery } from './get-user-shopping-lists.query'; // Update with the correct path
import { ShoppingListModel } from '../../database/shopping-list.model';
import { DataSource } from 'typeorm/data-source/DataSource';

@QueryHandler(GetUserShoppingListsQuery)
export class GetUserShoppingListsQueryHandler
  implements IQueryHandler<GetUserShoppingListsQuery, ShoppingListModel[]>
{
  constructor(private dataSource: DataSource) {}

  async execute(
    query: GetUserShoppingListsQuery,
  ): Promise<ShoppingListModel[]> {
    const shoppingListRepo = this.dataSource.getRepository(ShoppingListModel);

    // Assuming you have a user ID and want to retrieve shopping lists for that user
    const shoppingLists = await shoppingListRepo.find({
      where: { user: { id: query.userId } },
    });

    return shoppingLists;
  }
}
