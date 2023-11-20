import {FieldPath, FieldValues, UseControllerProps} from 'react-hook-form';
import {Option} from '../../../atoms/Select/types';
import {ViewStyle} from 'react-native';

export interface ControlledSelectProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> extends UseControllerProps<TFieldValues, TName> {
  options: Option<string>[];
  title: string;
  error?: string;
  style?: ViewStyle;
}
