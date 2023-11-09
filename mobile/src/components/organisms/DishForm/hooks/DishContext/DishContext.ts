import {createContext} from 'react';
import {DishContextProps} from './types';

export const DishContext = createContext<DishContextProps | undefined>(
  undefined,
);
