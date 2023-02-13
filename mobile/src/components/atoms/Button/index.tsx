import React, {memo} from 'react';
import {Button as PaperButton, ButtonProps} from 'react-native-paper';
import {styles} from './styles';

const Button = ({style, children, ...props}: ButtonProps) => (
  <PaperButton
    style={[styles.button, style]}
    labelStyle={styles.text}
    mode="contained"
    {...props}>
    {children}
  </PaperButton>
);

export default memo(Button);
