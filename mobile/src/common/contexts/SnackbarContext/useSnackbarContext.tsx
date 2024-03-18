import {useContext} from 'react';
import {SnackbarContext} from './SnackbarContext';
import {SnackbarContextProps} from './SnackbarContext.types';

export const useSnackbarContext = (): SnackbarContextProps => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error(
      'useSnackbarContext must be used within a SnackbarProvider',
    );
  }
  return context;
};
