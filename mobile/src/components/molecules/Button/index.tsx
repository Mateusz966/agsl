import React, {memo} from 'react';
import {Button as PaperButton} from 'react-native-paper';
import {components} from '../../../config/theme';
import {styles} from './styles';
import {ButtonProps} from './types';

const Button = ({style, children, ...props}: ButtonProps) => (
  <PaperButton
    style={[components.button.primary, style]}
    labelStyle={styles.text}
    mode="contained"
    {...props}>
    {children}
  </PaperButton>
);

export default memo(Button);
