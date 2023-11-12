import React, {FC} from 'react';
import {View} from 'react-native';
import TextButton from '../../atoms/Buttons/TextButton';
import {ButtonGroupProps} from './types';
import {styles} from './styles';

const ButtonGroup: FC<ButtonGroupProps> = ({buttons, display}) => (
  <View
    style={
      display === 'vertical'
        ? styles.buttonContainerVertical
        : styles.buttonContainerHorizontal
    }>
    {buttons.map((props, index) => (
      <TextButton key={`button-${index}`} {...props} />
    ))}
  </View>
);

export default ButtonGroup;
