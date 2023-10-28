import React, {FC, memo} from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {ErrorProps} from './types';
import Message from '../../atoms/Message';

export const ErrorMessage: FC<ErrorProps> = ({error, errorStyle}) => (
  <View style={[styles.container, errorStyle]}>
    <Message style={styles.error} message={error} />
  </View>
);

export default memo(ErrorMessage);
