import {IngredientMeasurementUnit} from "./dish";
import {Dish} from "../../entities/dish.entity";

export enum ShoppingListStatus {
    Draft = 'Draft',
    Accepted = 'Accepted',
    Ended = 'Ended',
}

export type ListItem = {
    isBought: boolean;
    name: string;
    amount: number;
    unit: IngredientMeasurementUnit;
    dish: Dish;
    id: string;
    createdAt: Date;
    updatedAt: Date;
};
