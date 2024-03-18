import React, {FC, memo} from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {NavigationParamList} from 'navigators/types';
import {colors} from 'theme';
import {IconButton} from 'atoms';
import {NavigationButtonProps} from '.';

const NavigationButton: FC<NavigationButtonProps> = ({
  sceneName,
  iconSource,
}) => {
  const {navigate} = useNavigation<NavigationProp<NavigationParamList>>();

  return (
    <IconButton
      icon={iconSource}
      onPress={() => navigate(sceneName)}
      iconColor={colors.white}
    />
  );
};

export default memo(NavigationButton);
