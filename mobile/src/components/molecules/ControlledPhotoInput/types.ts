import {FieldPath, FieldValues, UseControllerProps} from 'react-hook-form';

export interface ControlledTextInputProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> extends UseControllerProps<TFieldValues, TName> {
  placeholder?: string;
  displayName?: string;
}
