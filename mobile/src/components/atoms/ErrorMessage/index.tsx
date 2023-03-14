import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {styles} from './styles';
import {ErrorProps} from './types';
export const ErrorMessage = ({error}: ErrorProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.error}>{error}</Text>
    </View>
  );
};

export default ErrorMessage;
