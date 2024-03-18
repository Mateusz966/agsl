import React, {FC, memo} from 'react';
import {Text} from 'react-native-paper';
import {MessageProps} from '.';

export const Message: FC<MessageProps> = ({message, style}) => (
  <Text style={style}>{message}</Text>
);

export default memo(Message);
