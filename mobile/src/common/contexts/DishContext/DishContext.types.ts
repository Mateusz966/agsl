import {Dispatch, ReactNode, SetStateAction} from 'react';
import {DishResponse} from 'api/dish/types';

export interface DishBasketElement extends DishResponse {
  count: number;
}
export interface DishContextProps {
  dishId: string;
  setDishId: Dispatch<SetStateAction<string>>;
  dishesList: DishBasketElement[];
  setDishesList: Dispatch<SetStateAction<DishBasketElement[]>>;
  totalDishCount: number;
}

export interface DishProviderProps {
  children: ReactNode;
}
