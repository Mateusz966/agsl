import {ButtonProps} from 'react-native-paper';

export interface StyledButtonProps extends Omit<ButtonProps, 'children'> {
  children?: React.ReactNode;
}
