import React, {useState} from 'react';
import {
  ShoppingListContextProps,
  ShoppingListProviderProps,
} from './ShoppingListContext.types';
import {ShoppingListContext} from './ShoppingListContext';

const ShoppingListProvider = ({children}: ShoppingListProviderProps) => {
  const [shoppingListId, setShoppingListId] = useState('');

  const value: ShoppingListContextProps = {
    shoppingListId,
    setShoppingListId,
  };

  return (
    <ShoppingListContext.Provider value={value}>
      {children}
    </ShoppingListContext.Provider>
  );
};

export default ShoppingListProvider;
