import { ModelBase } from '@libs/db/model.base';
import { Column, Entity, ManyToOne } from 'typeorm';
import { UserModel } from '@modules/user/database/user.model';
import { ShoppingListStatus } from '@modules/shopping-list/dtos/shopping-list.response.dto';
import { ListItem } from '@modules/shopping-list/queries/generate-shopping-list/generate-shopping-list.http.controller';

@Entity({ name: 'shopping_list' })
export class ShoppingListModel extends ModelBase {
  @Column({ type: 'enum', enum: ShoppingListStatus })
  status: ShoppingListStatus;

  @Column({ type: 'jsonb' })
  generatedShoppingList: ListItem[];

  @ManyToOne(() => UserModel, (user) => user.shoppingList)
  user: UserModel;
}
