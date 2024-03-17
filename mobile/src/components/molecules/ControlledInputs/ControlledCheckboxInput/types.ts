import {FieldPath, FieldValues, UseControllerProps} from 'react-hook-form';
import {ViewStyle} from 'react-native';

export interface ControlledCheckboxInputProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> extends UseControllerProps<TFieldValues, TName> {
  error?: string;
  placeholder?: string;
  errorStyle?: ViewStyle;
  style?: ViewStyle;
}
