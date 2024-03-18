import {ReactNode, createContext} from 'react';
import {SnackbarContextProps} from './SnackbarContext.types';

export const SnackbarContext = createContext<SnackbarContextProps | undefined>(
  undefined,
);

export interface SnackbarProviderProps {
  children: ReactNode;
}
