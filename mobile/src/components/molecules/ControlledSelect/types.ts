import {FieldPath, FieldValues, UseControllerProps} from 'react-hook-form';

export interface Option {
  label: string;
  value: string;
}

export interface ControlledSelectProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> extends UseControllerProps<TFieldValues, TName> {
  options: Option[];
  handlePress: () => void;
  expanded: boolean;
  title: string;
}
