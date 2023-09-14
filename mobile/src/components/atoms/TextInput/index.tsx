import React, {memo} from 'react';
import {TextInput as Input, TextInputProps} from 'react-native-paper';
import {colors} from '../../../config/theme';
import {styles} from './styles';

const TextInput = ({...props}: TextInputProps) => (
  <Input
    style={styles.input}
    selectionColor={colors.primary}
    mode="outlined"
    {...props}
  />
);

export default memo(TextInput);
