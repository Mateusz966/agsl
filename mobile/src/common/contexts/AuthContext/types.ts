import {Dispatch, ReactNode, SetStateAction} from 'react';

export interface AuthContextProps {
  isLogged: boolean;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
}

export interface AuthProviderProps {
  children: ReactNode;
}
