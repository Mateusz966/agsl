import {ViewStyle} from 'react-native';
import {ButtonProps} from 'react-native-paper';

export enum ButtonType {
  Primary = 'primary',
  Secondary = 'secondary',
}

export interface StyledButtonProps extends Omit<ButtonProps, 'children'> {
  type?: ButtonType;
  children?: React.ReactNode;
}

export interface ButtonTypeStyle {
  style: ViewStyle;
  textColor?: string;
}

export type ButtonTypeDictionary<K extends string, T> = {
  [P in K]: T;
};
