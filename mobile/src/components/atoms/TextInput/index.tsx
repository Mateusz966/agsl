import React from 'react';
import {View} from 'react-native';
import {TextInput as Input} from 'react-native-paper';
import {theme} from '../../../utils/theme';
import {styles} from './styles';
import {TextInputProps} from './types';

const TextInput = ({...props}: TextInputProps) => (
  <View style={styles.container}>
    <Input
      style={styles.input}
      selectionColor={theme.colors.primary}
      underlineColor="transparent"
      mode="outlined"
      {...props}
    />
  </View>
);

export default TextInput;
