import * as React from 'react';
import {Card, Text} from 'react-native-paper';
import {TextBoxProps} from './types';
import {FC, memo} from 'react';
import {styles} from './styles';
import Message from '../../atoms/Message';

const TextBox: FC<TextBoxProps> = ({text}) => (
  <Card.Content style={styles.container}>
    <Message style={styles.textStyle} message={text} />
  </Card.Content>
);

export default memo(TextBox);
