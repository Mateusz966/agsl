import React, {memo} from 'react';
import {View} from 'react-native';
import {TextInput as Input} from 'react-native-paper';
import {colors} from '../../../utils/theme';
import {styles} from './styles';
import {TextInputProps} from './types';

const TextInput = ({...props}: TextInputProps) => (
  <View style={styles.container}>
    <Input
      style={styles.input}
      selectionColor={colors.primary}
      underlineColor={colors.primary}
      mode="flat"
      {...props}
    />
  </View>
);

export default memo(TextInput);
