import {FieldPath, FieldValues, UseControllerProps} from 'react-hook-form';
import {ViewStyle} from 'react-native';
import {Option} from '../../../../common/types/option';

export interface ControlledSelectProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> extends UseControllerProps<TFieldValues, TName> {
  options: Option<string>[];
  title: string;
  error?: string;
  style?: ViewStyle;
}
