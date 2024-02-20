import React, {useCallback, useState} from 'react';
import {AuthContextProps, AuthProviderProps, AuthState} from './types';
import {AuthContext} from './AuthContext';
import {getGenericPassword} from 'react-native-keychain';
import {
  NavigationProp,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import {RootStackParamList} from '../../../navigators/RootNavigation/types';
import {Scenes} from '../../../navigators/RootNavigation/const';

export const AuthProvider = ({children}: AuthProviderProps) => {
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();
  const [authData, setAuthData] = useState<AuthState>({
    isLogged: false,
    nickName: '',
  });

  useFocusEffect(
    useCallback(() => {
      const isTokenValid = async () => {
        const credentials = await getGenericPassword();
        if (credentials) {
          setAuthData({isLogged: true, nickName: credentials.username});
        } else {
          setAuthData({isLogged: false, nickName: ''});
        }
      };
      isTokenValid();
    }, []),
  );

  useFocusEffect(
    useCallback(() => {
      if (!authData.isLogged) {
        navigate(Scenes.Entry);
      } else {
        navigate(Scenes.Tab);
      }
    }, [authData.isLogged, navigate]),
  );

  const value: AuthContextProps = {
    authData,
    setAuthData,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
