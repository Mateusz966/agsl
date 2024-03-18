import {ViewStyle} from 'react-native';

export interface PhotoActionWrapperProps {
  onEditHandler: () => void;
  onDeleteHandler: () => void;
  editText: string;
  deleteText: string;
  primaryButtonStyle?: ViewStyle;
  secondaryButtonStyle?: ViewStyle;
  style?: ViewStyle;
}
