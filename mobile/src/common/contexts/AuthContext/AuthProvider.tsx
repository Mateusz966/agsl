import React, {useCallback, useState} from 'react';
import {
  AuthContextProps,
  AuthProviderProps,
  AuthState,
} from './AuthContext.types';
import {AuthContext} from './AuthContext';
import {getGenericPassword} from 'react-native-keychain';
import {
  NavigationProp,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import {
  RootScenes,
  RootStackParamList,
} from '../../../navigators/RootNavigation/RootNavigation.types';

const AuthProvider = ({children}: AuthProviderProps) => {
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
        navigate(RootScenes.Entry);
      } else {
        navigate(RootScenes.Tab);
      }
    }, [authData.isLogged, navigate]),
  );

  const value: AuthContextProps = {
    authData,
    setAuthData,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
