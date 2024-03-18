import React, {memo} from 'react';
import {ButtonProps, Button as PaperButton} from 'react-native-paper';
import {components} from 'theme';

const TextButton = ({style, children, textColor, ...props}: ButtonProps) => (
  <PaperButton
    style={[components.button.style.primary, style]}
    textColor={textColor ?? components.button.textColor.primary}
    mode="outlined"
    {...props}>
    {children}
  </PaperButton>
);

export default memo(TextButton);
