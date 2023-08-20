import { ModelBase } from '@libs/db/model.base';
import { Column, Entity, ManyToOne } from 'typeorm';
import { IngredientMeasurementUnit } from '@modules/dish/domain/value-objects/ingredients.value-object';
import { DishModel } from '@modules/dish/database/dish.model';

@Entity({ name: 'ingredients' })
export class IngredientsModel extends ModelBase {
  @Column()
  name: string;
  @Column()
  amount: string;
  @Column()
  unit: IngredientMeasurementUnit;
  @ManyToOne(() => DishModel, (dish) => dish.ingredients)
  dish: DishModel;
}
