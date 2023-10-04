import React, {memo} from 'react';
import {Button as PaperButton} from 'react-native-paper';
import {components} from '../../../config/theme';
import {styles} from './styles';
import {StyledButtonProps} from './types';
import {ButtonStyleDictionary} from './const';

const Button = ({style, children, type, ...props}: StyledButtonProps) => (
  <PaperButton
    style={[
      type
        ? ButtonStyleDictionary[type].style
        : ButtonStyleDictionary.primary.style,
      style,
    ]}
    textColor={
      type
        ? ButtonStyleDictionary[type].textColor
        : ButtonStyleDictionary.primary.textColor
    }
    mode="outlined"
    {...props}>
    {children}
  </PaperButton>
);

export default memo(Button);
