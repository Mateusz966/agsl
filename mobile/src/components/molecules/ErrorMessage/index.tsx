import React, {FC, memo} from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {ErrorProps} from './types';
import Message from '../../atoms/Message';

export const ErrorMessage: FC<ErrorProps> = ({error}) => (
  <View style={styles.container}>
    <Message style={styles.error} message={error} />
  </View>
);

export default memo(ErrorMessage);
