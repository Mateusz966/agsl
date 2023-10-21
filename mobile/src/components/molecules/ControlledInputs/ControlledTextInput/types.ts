import {FieldPath, FieldValues, UseControllerProps} from 'react-hook-form';

export type KeyboardType = 'default' | 'numeric';
export interface ControlledTextInputProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> extends UseControllerProps<TFieldValues, TName> {
  isPassword?: boolean;
  error?: string;
  placeholder?: string;
  displayName?: string;
  keyboardType?: KeyboardType;
}
