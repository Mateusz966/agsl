import { ModelBase } from '@libs/db/model.base';
import { Column, Entity, ManyToOne } from 'typeorm';
import { UserModel } from '@modules/user/database/user.model';
import {IngredientsModel} from "@modules/dish/database/ingredients.model";

@Entity({ name: 'shopping_list' })
export class ShoppingListModel extends ModelBase {
  @Column({ type: 'boolean' })
  isDraft: boolean;

  @Column({ type: 'jsonb' })
  generatedShoppingList: IngredientsModel[];

  @ManyToOne(() => UserModel, (user) => user.shoppingList)
  user: UserModel;
}
