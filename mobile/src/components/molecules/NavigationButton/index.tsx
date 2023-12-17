import * as React from 'react';
import {FC, memo} from 'react';
import {NavigationButtonProps} from './types';
import IconButton from '../../atoms/Buttons/IconButton';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../navigators/types';
import {colors} from '../../../config/theme';

const NavigationButton: FC<NavigationButtonProps> = ({
  sceneName,
  iconSource,
}) => {
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <IconButton
      icon={iconSource}
      onPress={() => navigate(sceneName)}
      iconColor={colors.white}
    />
  );
};

export default memo(NavigationButton);
