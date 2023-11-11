import {TextBoxProps} from '../TextBox/types';

export interface PressableTextBoxProps extends TextBoxProps {
  onPressHandler: () => void;
}
