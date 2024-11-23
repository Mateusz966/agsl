import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "../shared/database/base.entity";
import { DishPhoto } from "./dish-photo.entity";
import { Dish } from "./dish.entity";
import {ShoppingList} from "./shopping-list.entity";

@Entity({ name: "user" })
export class User extends BaseEntity<User> {
  @Column({ nullable: true, type: "text" })
  nick!: string | undefined;

  @Column({ unique: true, type: "text" })
  email!: string;

  @Column({ type: "text" })
  externalId!: string;

  @OneToMany(() => Dish, (dish) => dish.user)
  dish!: Dish;
  @OneToMany(() => DishPhoto, (dishPhoto) => dishPhoto.user)
  dishPhoto!: DishPhoto;
  @OneToMany(() => ShoppingList, (shoppingList) => shoppingList.user)
  shoppingList!: ShoppingList;
}
