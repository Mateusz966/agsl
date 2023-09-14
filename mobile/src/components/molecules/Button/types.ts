import {ViewStyle} from 'react-native';
import {ButtonProps} from 'react-native-paper';

export enum ButtonType {
  Primary = 'primary',
  Secondary = 'secondary',
}

export interface StyledButtonProps extends ButtonProps {
  type?: ButtonType;
}

export interface ButtonTypeStyle {
  style: ViewStyle;
  textColor?: string;
}

export type ButtonTypeDictionary<K extends string, T> = {
  [P in K]: T;
};
