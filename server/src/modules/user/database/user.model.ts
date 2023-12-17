import { ModelBase } from '@libs/db/model.base';
import { UserRoles } from '@modules/user/domain/user.types';
import { Column, Entity, OneToMany } from 'typeorm';
import { DishModel } from '@modules/dish/database/dish.model';
import { DishPhotoModel } from '@modules/dish/database/dish-photo.model';
import { ShoppingListModel } from '@modules/shopping-list/database/shopping-list.model';

@Entity({ name: 'user' })
export class UserModel extends ModelBase {
  @Column({ nullable: true })
  nick: string | undefined;
  @Column({ unique: true })
  email: string;
  @Column()
  password: string;
  @Column({
    type: 'enum',
    enum: UserRoles,
    default: UserRoles.user,
  })
  role: UserRoles;
  @OneToMany(() => DishModel, (dish) => dish.user)
  dish: DishModel;
  @OneToMany(() => DishPhotoModel, (dishPhoto) => dishPhoto.user)
  dishPhoto: DishPhotoModel;
  @OneToMany(() => ShoppingListModel, (shoppingList) => shoppingList.user)
  shoppingList: ShoppingListModel[];
}
