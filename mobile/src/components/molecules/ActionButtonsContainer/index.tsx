import * as React from 'react';
import {ActionButtonsContainerProps} from './types';
import {FC, memo} from 'react';

import {View} from 'react-native';
import styles from './styles';
import Button from '../../atoms/Button';
import {ButtonType} from '../../atoms/Button/types';

const ActionButtonsContainer: FC<ActionButtonsContainerProps> = ({
  primaryButtonText,
  secondaryButtonText,
  primaryButtonHandler,
  secondaryButtonHandler,
  primaryButtonStyle,
  secondaryButtonStyle,
  containerStyle,
}) => (
  <View style={containerStyle}>
    <Button
      type={ButtonType.Primary}
      onPress={primaryButtonHandler}
      style={primaryButtonStyle}>
      {primaryButtonText}
    </Button>
    <Button
      type={ButtonType.Secondary}
      onPress={secondaryButtonHandler}
      style={secondaryButtonStyle}>
      {secondaryButtonText}
    </Button>
  </View>
);

export default memo(ActionButtonsContainer);
