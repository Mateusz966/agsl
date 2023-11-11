import * as React from 'react';
import {PressableTextBoxProps} from './types';
import {FC, memo} from 'react';
import TextBox from '../TextBox';
import {Pressable} from 'react-native';
import {styles} from './styles';

const PressableTextBox: FC<PressableTextBoxProps> = ({
  onPressHandler,
  text,
}) => (
  <Pressable style={styles.outline} onPress={onPressHandler}>
    <TextBox text={text} />
  </Pressable>
);

export default memo(PressableTextBox);
