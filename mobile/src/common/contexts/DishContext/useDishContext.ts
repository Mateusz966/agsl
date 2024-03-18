import {useContext} from 'react';
import {DishContextProps} from './DishContext.types';
import {DishContext} from './DishContext';

export const useDishContext = (): DishContextProps => {
  const context = useContext(DishContext);
  if (!context) {
    throw new Error('useDishContext must be used within a DishProvider');
  }
  return context;
};
