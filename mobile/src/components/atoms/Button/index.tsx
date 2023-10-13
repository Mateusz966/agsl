import React, {memo} from 'react';
import {Button as PaperButton} from 'react-native-paper';
import {components} from '../../../config/theme';
import {StyledButtonProps} from './types';

const Button = ({style, children, textColor, ...props}: StyledButtonProps) => (
  <PaperButton
    style={[components.button.style.primary, style]}
    textColor={textColor ?? components.button.textColor.primary}
    mode="outlined"
    {...props}>
    {children}
  </PaperButton>
);

export default memo(Button);
