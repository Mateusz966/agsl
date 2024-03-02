import {ButtonProps} from 'react-native-paper';

export type ButtonGroupDisplay = 'horizontal' | 'vertical';
export interface ButtonGroupProps {
  buttons: ButtonProps[];
  display: ButtonGroupDisplay;
}
