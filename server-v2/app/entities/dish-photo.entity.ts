import { Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "../shared/database/base.entity";
import { User } from "./user.entity";
import { Dish } from "./dish.entity";

@Entity({ name: "dish_photo" })
export class DishPhoto extends BaseEntity<DishPhoto> {
  @ManyToOne(() => User, (user) => user.dish)
  user!: User;

  @ManyToOne(() => Dish, (dish) => dish.dishPhoto)
  dish!: Dish;
}
