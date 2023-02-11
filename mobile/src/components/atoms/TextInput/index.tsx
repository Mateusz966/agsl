import React, {memo} from 'react';
import {View, Text} from 'react-native';
import {TextInput as Input} from 'react-native-paper';
import {theme} from '../../../utils/theme';
import {styles} from './styles';
import {TextInputProps} from './types';

const TextInput = ({errorText, ...props}: TextInputProps) => (
  <View style={styles.container}>
    <Input
      style={styles.input}
      selectionColor={theme.colors.primary}
      underlineColor="transparent"
      mode="outlined"
      {...props}
    />
    {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
  </View>
);

export default memo(TextInput);
