import {Dispatch, ReactNode, SetStateAction} from 'react';

export interface DishContextProps {
  dishId: string;
  setDishId: Dispatch<SetStateAction<string>>;
}

export interface DishProviderProps {
  children: ReactNode;
}
