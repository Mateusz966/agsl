import React, {FC, memo} from 'react';
import {Pressable} from 'react-native';
import {TextBox} from 'molecules';
import {PressableTextBoxProps, styles} from '.';

const PressableTextBox: FC<PressableTextBoxProps> = ({
  onPressHandler,
  text,
}) => (
  <Pressable style={styles.outline} onPress={onPressHandler}>
    <TextBox text={text} />
  </Pressable>
);

export default memo(PressableTextBox);
