import { ModelBase } from '@libs/db/model.base';
import { Column, Entity, ManyToOne } from 'typeorm';
import { UserModel } from '@modules/user/database/user.model';
import { IngredientsModel } from '@modules/dish/database/ingredients.model';
import { ShoppingListStatus } from '@modules/shopping-list/dtos/shopping-list.response.dto';

@Entity({ name: 'shopping_list' })
export class ShoppingListModel extends ModelBase {
  @Column({ type: 'enum', enum: ShoppingListStatus })
  status: ShoppingListStatus;

  @Column({ type: 'jsonb' })
  generatedShoppingList: IngredientsModel[];

  @ManyToOne(() => UserModel, (user) => user.shoppingList)
  user: UserModel;
}
