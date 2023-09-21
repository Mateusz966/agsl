import {TextBoxProps} from '../../../atoms/TextBox/types';

export interface PressableTextBoxProps extends TextBoxProps {
  onPressHandler: () => void;
}
