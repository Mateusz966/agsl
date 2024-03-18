import {TextBoxProps} from '../TextBox/TextBox.types';

export interface PressableTextBoxProps extends TextBoxProps {
  onPressHandler: () => void;
}
