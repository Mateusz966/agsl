import * as React from 'react';
import {PressableTextBoxProps} from './types';
import {FC, memo} from 'react';
import TextBox from '../../../atoms/TextBox';
import {Pressable} from 'react-native';

const PressableTextBox: FC<PressableTextBoxProps> = ({
  onPressHandler,
  text,
  style,
}) => (
  <Pressable onPress={onPressHandler}>
    <TextBox text={text} style={style} />
  </Pressable>
);

export default memo(PressableTextBox);
