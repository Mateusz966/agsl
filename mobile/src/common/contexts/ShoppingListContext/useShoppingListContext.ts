import {useContext} from 'react';
import {ShoppingListContextProps} from './ShoppingListContext.types';
import {ShoppingListContext} from './ShoppingListContext';

export const useShoppingListContext = (): ShoppingListContextProps => {
  const context = useContext(ShoppingListContext);
  if (!context) {
    throw new Error(
      'useShoppingListContext must be used within a ShoppingListProvider',
    );
  }
  return context;
};
