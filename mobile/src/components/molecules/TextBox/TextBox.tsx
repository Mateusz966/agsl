import React, {FC, memo} from 'react';
import {Card} from 'react-native-paper';
import {Message} from 'atoms';
import {TextBoxProps, styles} from '.';

const TextBox: FC<TextBoxProps> = ({text}) => (
  <Card.Content style={styles.container}>
    <Message style={styles.textStyle} message={text} />
  </Card.Content>
);

export default memo(TextBox);
