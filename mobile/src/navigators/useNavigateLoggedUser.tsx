import {
  NavigationProp,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import Keychain from 'react-native-keychain';
import {Scenes} from './const';
import {RootStackParamList} from './types';
import {useCallback} from 'react';

const useNavigateLoggedUser = (scene: Scenes) => {
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();
  const isLogged = async () => {
    const credentials = await Keychain.getGenericPassword();

    if (credentials) {
      navigate(scene);
    }
  };

  useFocusEffect(
    useCallback(() => {
      isLogged();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );
};
export default useNavigateLoggedUser;
