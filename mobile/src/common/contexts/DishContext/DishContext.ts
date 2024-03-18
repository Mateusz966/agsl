import {createContext} from 'react';
import {DishContextProps} from './DishContext.types';

export const DishContext = createContext<DishContextProps | undefined>(
  undefined,
);
