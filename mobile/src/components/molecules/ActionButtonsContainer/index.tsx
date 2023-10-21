import * as React from 'react';
import {ActionButtonsContainerProps} from './types';
import {FC, memo} from 'react';

import {View} from 'react-native';
import styles from './styles';
import Button from '../../atoms/Button';
import {components} from '../../../config/theme';

const ActionButtonsContainer: FC<ActionButtonsContainerProps> = ({
  primaryButtonText,
  secondaryButtonText,
  primaryButtonHandler,
  secondaryButtonHandler,
  containerStyle,
}) => (
  <View style={[styles.actionButtonsContainer, containerStyle]}>
    <Button
      onPress={primaryButtonHandler}
      style={components.button.style.primary}
      textColor={components.button.textColor.primary}>
      {primaryButtonText}
    </Button>
    <Button
      onPress={secondaryButtonHandler}
      style={components.button.style.secondary}
      textColor={components.button.textColor.secondary}>
      {secondaryButtonText}
    </Button>
  </View>
);

export default memo(ActionButtonsContainer);
