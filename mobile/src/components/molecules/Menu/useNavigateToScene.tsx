import {useCallback} from 'react';
import {Scenes} from '../../../navigators/RootNavigation/const';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../navigators/RootNavigation/types';
import {resetGenericPassword} from 'react-native-keychain';

const useNavigateToScene = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleNavigate = useCallback(
    async (scene: Scenes) => {
      if (scene === Scenes.Login) {
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
