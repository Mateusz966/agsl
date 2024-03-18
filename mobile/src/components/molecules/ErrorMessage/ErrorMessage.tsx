import React, {FC, memo} from 'react';
import {View} from 'react-native';
import {Message} from 'atoms';
import {ErrorProps, styles} from '.';

export const ErrorMessage: FC<ErrorProps> = ({error, errorStyle}) => (
  <View style={[styles.container, errorStyle]}>
    <Message style={styles.error} message={error} />
  </View>
);

export default memo(ErrorMessage);
