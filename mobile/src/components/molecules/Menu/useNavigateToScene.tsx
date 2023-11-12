import {useCallback, useState} from 'react';
import {Scenes} from '../../../navigators/DefaultNavigation/const';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../navigators/DefaultNavigation/types';

const useNavigateToScene = () => {
  const [sceneToNavigate, setSceneToNavigate] = useState<Scenes>(
    Scenes.AddDish,
  );
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, typeof sceneToNavigate>
    >();

  const handleNavigate = useCallback(
    (scene: Scenes) => {
      setSceneToNavigate(scene);
      navigation.navigate(scene);
    },
    [navigation],
  );

  return {handleNavigate};
};

export default useNavigateToScene;
