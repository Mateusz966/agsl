import {useCallback} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {
  RootScenes,
  RootStackParamList,
} from '../../../navigators/RootNavigation/types';
import {resetGenericPassword} from 'react-native-keychain';

const useNavigateToScene = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleNavigate = useCallback(
    async (scene: RootScenes) => {
      if (scene === RootScenes.Login) {
        await resetGenericPassword();
        navigation.navigate(scene);
      } else {
        navigation.navigate(scene);
      }
    },
    [navigation],
  );

  return {handleNavigate};
};

export default useNavigateToScene;
