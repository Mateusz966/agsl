import {createContext} from 'react';
import {ShoppingListContextProps} from './types';

export const ShoppingListContext = createContext<
  ShoppingListContextProps | undefined
>(undefined);
