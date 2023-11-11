import {ViewStyle} from 'react-native';

export type ButtonProps = {onPress: () => void; text: string};

export interface ActionButtonsContainerProps {
  primaryButtonProps: ButtonProps;
  secondaryButtonProps: ButtonProps;
  containerStyle?: ViewStyle;
}
