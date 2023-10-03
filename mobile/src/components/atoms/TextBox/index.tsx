import * as React from 'react';
import {Card, Text} from 'react-native-paper';
import {TextBoxProps} from './types';
import {FC, memo} from 'react';
import {styles} from './styles';

const TextBox: FC<TextBoxProps> = ({text}) => (
  <Card.Content style={styles.container}>
    <Text style={styles.textStyle}>{text}</Text>
  </Card.Content>
);

export default memo(TextBox);
