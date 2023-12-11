import {useContext} from 'react';
import {AuthContextProps} from './types';
import {AuthContext} from './AuthContext';

export const useAuthContext = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};
