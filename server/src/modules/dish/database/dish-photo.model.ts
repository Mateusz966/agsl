import { ModelBase } from '@libs/db/model.base';
import { Entity, ManyToOne } from 'typeorm';
import { UserModel } from '@modules/user/database/user.model';
import { DishModel } from '@modules/dish/database/dish.model';

@Entity({ name: 'dish_photo' })
export class DishPhotoModel extends ModelBase {
  @ManyToOne(() => UserModel, (user) => user.dish)
  user: UserModel;

  @ManyToOne(() => DishModel, (dish) => dish.dishPhoto)
  dish: DishModel;
}
