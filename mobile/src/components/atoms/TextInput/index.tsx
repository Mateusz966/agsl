import React, {FC, memo} from 'react';
import {TextInput as Input, TextInputProps} from 'react-native-paper';
import {colors} from '../../../config/theme';
import {styles} from './styles';

const TextInput: FC<TextInputProps> = ({...props}) => {
  console.log(props.error, 'error2');
  return (
    <Input
      style={styles.input}
      selectionColor={colors.primary}
      mode="outlined"
      {...props}
    />
  );
};

export default memo(TextInput);
