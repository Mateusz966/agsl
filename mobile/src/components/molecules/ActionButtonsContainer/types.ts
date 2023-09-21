import {ViewStyle} from 'react-native';

export interface ActionButtonsContainerProps {
  primaryButtonText: string;
  secondaryButtonText: string;
  primaryButtonHandler: () => void;
  secondaryButtonHandler: () => void;
  primaryButtonStyle?: ViewStyle;
  secondaryButtonStyle?: ViewStyle;
  containerStyle?: ViewStyle;
}
