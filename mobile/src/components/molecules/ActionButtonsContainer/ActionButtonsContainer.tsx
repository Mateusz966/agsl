import React, {FC, memo} from 'react';
import {View} from 'react-native';
import {components} from 'theme';
import {Button} from 'atoms';
import {styles, ActionButtonsContainerProps} from '.';

const ActionButtonsContainer: FC<ActionButtonsContainerProps> = ({
  primaryButtonProps,
  secondaryButtonProps,
  containerStyle,
}) => (
  <View style={[styles.actionButtonsContainer, containerStyle]}>
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
