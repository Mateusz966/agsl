import React, {useState} from 'react';
import {DishContext} from './DishContext';
import {DishContextProps, DishProviderProps} from './types';

export const DishProvider = ({children}: DishProviderProps) => {
  const [dishId, setDishId] = useState('');

  const value: DishContextProps = {
    dishId,
    setDishId,
  };

  return <DishContext.Provider value={value}>{children}</DishContext.Provider>;
};
