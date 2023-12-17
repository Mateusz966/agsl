import React, {useCallback, useState} from 'react';
import {AuthContextProps, AuthProviderProps} from './types';
import {AuthContext} from './AuthContext';
import Keychain from 'react-native-keychain';
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
        if (credentials) {
          setIsLogged(true);
        } else {
          setIsLogged(false);
        }
      };
      isTokenValid();
    }, []),
  );

  useFocusEffect(
    useCallback(() => {
      if (!isLogged) {
        navigate(Scenes.Entry);
      } else {
        navigate(Scenes.DishList);
      }
    }, [isLogged, navigate]),
  );

  const value: AuthContextProps = {
    isLogged,
    setIsLogged,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
