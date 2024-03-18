import React, {FC, memo} from 'react';
import {TextInput as Input, TextInputProps} from 'react-native-paper';
import {colors} from 'theme';
import {styles} from '.';

const TextInput: FC<TextInputProps> = ({...props}) => (
  <Input
    style={styles.input}
    selectionColor={colors.primary}
    mode="outlined"
    {...props}
  />
);

export default memo(TextInput);
