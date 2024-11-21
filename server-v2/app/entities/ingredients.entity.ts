import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "../shared/database/base.entity";
import { IngredientMeasurementUnit } from "../shared/types";
import { Dish } from "./dish.entity";

@Entity({ name: "ingredients" })
export class Ingredients extends BaseEntity<Ingredients> {
  @Column()
  name!: string;
  @Column({ type: "float4" })
  amount!: number;
  @Column()
  unit!: IngredientMeasurementUnit;
  @ManyToOne(() => Dish, (dish) => dish.ingredients)
  dish!: Dish;
}
