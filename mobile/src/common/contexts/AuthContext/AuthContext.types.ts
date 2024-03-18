import {Dispatch, ReactNode, SetStateAction} from 'react';

export interface AuthState {
  isLogged: boolean;
  nickName: string;
}

export interface AuthContextProps {
  authData: AuthState;
  setAuthData: Dispatch<SetStateAction<AuthState>>;
}

export interface AuthProviderProps {
  children: ReactNode;
}
