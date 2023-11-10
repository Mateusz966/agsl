import { ModelBase } from '@libs/db/model.base';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { IngredientsModel } from '@modules/dish/database/ingredients.model';
import { UserModel } from '@modules/user/database/user.model';
import { DishPhotoModel } from '@modules/dish/database/dish-photo.model';

@Entity({ name: 'dish' })
export class DishModel extends ModelBase {
  @Column()
  name: string;

  @OneToMany(() => IngredientsModel, (ingredient) => ingredient.dish, {
    eager: true,
  })
  ingredients: IngredientsModel[];

  @ManyToOne(() => UserModel, (user) => user.dish)
  user: UserModel;

  @OneToMany(() => DishPhotoModel, (dishPhoto) => dishPhoto.dish, {
    eager: true,
  })
  dishPhoto: DishPhotoModel[];
}
