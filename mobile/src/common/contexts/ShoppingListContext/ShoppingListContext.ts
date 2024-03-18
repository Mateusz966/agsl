import {createContext} from 'react';
import {ShoppingListContextProps} from './ShoppingListContext.types';

export const ShoppingListContext = createContext<
  ShoppingListContextProps | undefined
>(undefined);
