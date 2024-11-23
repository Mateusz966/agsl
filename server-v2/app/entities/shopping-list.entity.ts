import {Column, Entity, ManyToOne} from "typeorm";
import {BaseEntity} from "../shared/database/base.entity";
import {User} from "./user.entity";
import {ListItem, ShoppingListStatus} from "../shared/types";

@Entity({ name: 'shopping_list' })
export class ShoppingList extends BaseEntity<ShoppingList> {
    @Column({
        type: 'enum',
        enum: ShoppingListStatus,
        nullable: true,
        default: null,
    })
    status!: ShoppingListStatus;

    @Column({ type: 'jsonb' })
    generatedShoppingList!: ListItem[];

    @ManyToOne(() => User, (user) => user.shoppingList)
    user!: User;
}