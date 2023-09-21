import * as React from 'react';
import {Card, Text} from 'react-native-paper';
import {TextBoxProps} from './types';
import {FC, memo} from 'react';

const TextBox: FC<TextBoxProps> = ({text, style}) => (
  <Card.Content style={style}>
    <Text>{text}</Text>
  </Card.Content>
);

export default memo(TextBox);
