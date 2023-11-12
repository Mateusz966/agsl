import * as React from 'react';
import {FC, memo} from 'react';
import {NavigationButtonProps} from './types';
import IconButton from '../../atoms/Buttons/IconButton';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../navigators/DefaultNavigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {colors} from '../../../config/theme';

const NavigationButton: FC<NavigationButtonProps> = ({
  sceneName,
  iconSource,
}) => {
  type NavigationProps = NativeStackNavigationProp<
    RootStackParamList,
    typeof sceneName
  >;
  const navigation = useNavigation<NavigationProps>();

  return (
    <IconButton
      icon={iconSource}
      onPress={() => navigation.navigate(sceneName)}
      iconColor={colors.white}
    />
  );
};

export default memo(NavigationButton);
