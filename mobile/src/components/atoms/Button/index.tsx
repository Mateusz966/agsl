import React, {memo} from 'react';
import {Button as PaperButton, ButtonProps} from 'react-native-paper';
import {theme} from '../../../utils/theme';
import {styles} from './styles';

const Button = ({mode, style, children, ...props}: ButtonProps) => (
  <PaperButton
    style={[
      styles.button,
      mode === 'outlined' && {backgroundColor: theme.colors.surface},
      style,
    ]}
    labelStyle={styles.text}
    mode={mode}
    {...props}>
    {children}
  </PaperButton>
);

export default memo(Button);
