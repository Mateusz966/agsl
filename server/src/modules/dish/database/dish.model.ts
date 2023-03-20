import { ModelBase } from '@libs/db/model.base';
import { Column, Entity, OneToMany } from 'typeorm';
import { IngredientsModel } from '@modules/dish/database/ingredients.model';

@Entity({ name: 'dish' })
export class DishModel extends ModelBase {
  @Column()
  name: string;
  @Column({ nullable: true, default: null })
  photo?: string | null;
  @OneToMany(() => IngredientsModel, (ingredient) => ingredient.dish)
  ingredients: IngredientsModel;
}
