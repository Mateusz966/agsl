import React, {useCallback, useState} from 'react';
import {AuthContextProps, AuthProviderProps} from './types';
import {AuthContext} from './AuthContext';
import Keychain from 'react-native-keychain';
import {decode} from 'base-64';
import {
  NavigationProp,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import {RootStackParamList} from '../../../navigators/types';
import {Scenes} from '../../../navigators/const';

export const AuthProvider = ({children}: AuthProviderProps) => {
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();
  const [isLogged, setIsLogged] = useState(false);

  useFocusEffect(
    useCallback(() => {
      const isTokenValid = async () => {
        const credentials = await Keychain.getGenericPassword();
        const currentDate = new Date();
        if (credentials) {
          const [_, payload] = credentials.password.split('.');
          const decodedToken = JSON.parse(decode(payload));
          if (
            decodedToken.exp &&
            decodedToken.exp * 1000 < currentDate.getTime()
          ) {
            setIsLogged(false);
          } else {
            setIsLogged(true);
          }
        }
      };

      isTokenValid();
    }, []),
  );

  useFocusEffect(
    useCallback(() => {
      if (!isLogged) {
        navigate(Scenes.Login);
      }
    }, [isLogged, navigate]),
  );

  const value: AuthContextProps = {
    isLogged,
    setIsLogged,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
