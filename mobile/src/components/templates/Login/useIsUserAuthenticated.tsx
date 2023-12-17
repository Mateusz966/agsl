import {
  NavigationProp,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import Keychain from 'react-native-keychain';
import {Scenes} from '../../../navigators/const';
import {RootStackParamList} from '../../../navigators/types';
import {useCallback} from 'react';
import {decode} from 'base-64';

const useIsUserAuthenticated = (scene: Scenes) => {
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();

  const isTokenValid = async () => {
    const credentials = await Keychain.getGenericPassword();
    const currentDate = new Date();
    if (credentials) {
      const [_, payload] = credentials.password.split('.');
      const decodedToken = JSON.parse(decode(payload));
      if (decodedToken.exp && decodedToken.exp * 1000 < currentDate.getTime()) {
        return false;
      } else {
        return true;
      }
    }
  };

  useFocusEffect(
    useCallback(() => {
      const navigateLoggedUser = async () => {
        const token = await isTokenValid();
        if (token) {
          navigate(scene);
        } else {
          navigate(Scenes.Entry);
        }
      };

      navigateLoggedUser();
    }, [navigate, scene]),
  );
};
export default useIsUserAuthenticated;
