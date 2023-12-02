import {Dispatch, SetStateAction} from 'react';
import {Ingredient} from '../../../api/dish/types';

export interface ShoppingListElementProps {
  index: number;
  ingredient: Ingredient;
  isBought: boolean;
  setIsBought: Dispatch<SetStateAction<boolean>>;
}
