import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "../shared/database/base.entity";
import { User } from "./user.entity";
import { Ingredients } from "./ingredients.entity";
import { DishPhoto } from "./dish-photo.entity";

@Entity({ name: "dish" })
export class Dish extends BaseEntity<Dish> {
  @Column()
  name!: string;

  @OneToMany(() => Ingredients, (ingredient) => ingredient.dish, {
    eager: true,
  })
  ingredients!: Ingredients[];

  @ManyToOne(() => User, (user) => user.dish)
  user!: User;

  @OneToMany(() => DishPhoto, (dishPhoto) => dishPhoto.dish, {
    eager: true,
  })
  dishPhoto!: DishPhoto[];
}
