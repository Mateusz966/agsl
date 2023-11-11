import React, {memo} from 'react';
import {
  IconButtonProps,
  IconButton as PaperIconButton,
} from 'react-native-paper';

const IconButton = ({
  onPress,
  iconColor,
  size,
  icon,
  containerColor,
}: IconButtonProps) => (
  <PaperIconButton
    icon={icon}
    iconColor={iconColor}
    size={size}
    onPress={onPress}
    containerColor={containerColor}
  />
);

export default memo(IconButton);
