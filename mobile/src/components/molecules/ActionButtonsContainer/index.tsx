import * as React from 'react';
import {ActionButtonsContainerProps} from './types';
import {FC, memo} from 'react';

import {View} from 'react-native';
import styles from './styles';
import Button from '../../atoms/Buttons/TextButton';
import {components} from '../../../config/theme';

const ActionButtonsContainer: FC<ActionButtonsContainerProps> = ({
  primaryButtonProps,
  secondaryButtonProps,
  containerStyle,
}) => (
  <View style={containerStyle ?? styles.actionButtonsContainer}>
    <Button
      onPress={primaryButtonProps.onPress}
      style={components.button.style.primary}
      textColor={components.button.textColor.primary}>
      {primaryButtonProps.text}
    </Button>
    <Button
      onPress={secondaryButtonProps.onPress}
      style={components.button.style.secondary}
      textColor={components.button.textColor.secondary}>
      {secondaryButtonProps.text}
    </Button>
  </View>
);

export default memo(ActionButtonsContainer);
