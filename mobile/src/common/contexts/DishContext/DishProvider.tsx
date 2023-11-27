import React, {useMemo, useState} from 'react';
import {DishContext} from './DishContext';
import {DishBasketElement, DishContextProps, DishProviderProps} from './types';

export const DishProvider = ({children}: DishProviderProps) => {
  const [dishId, setDishId] = useState('');
  const [dishesList, setDishesList] = useState<DishBasketElement[]>([]);

  const totalDishCount = useMemo(
    () => dishesList.reduce((sum, item) => sum + item.count, 0),
    [dishesList],
  );

  const value: DishContextProps = {
    dishId,
    setDishId,
    dishesList,
    setDishesList,
    totalDishCount,
  };

  return <DishContext.Provider value={value}>{children}</DishContext.Provider>;
};
