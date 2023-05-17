import { ModelBase } from '@libs/db/model.base';
import { Column, Entity, ManyToOne } from 'typeorm';
import { UserModel } from '@modules/user/database/user.model';
import { DishModel } from '@modules/dish/database/dish.model';

@Entity({ name: 'dish_photo' })
export class DishPhotoModel extends ModelBase {
  @Column()
  name: string;

  @ManyToOne(() => UserModel, (user) => user.dish)
  user: UserModel;

  @ManyToOne(() => DishModel, (dish) => dish.dishPhoto)
  dish: DishModel;
}
