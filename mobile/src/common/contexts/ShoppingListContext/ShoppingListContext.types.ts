import {Dispatch, ReactNode, SetStateAction} from 'react';

export interface ShoppingListContextProps {
  shoppingListId: string;
  setShoppingListId: Dispatch<SetStateAction<string>>;
}

export interface ShoppingListProviderProps {
  children: ReactNode;
}
