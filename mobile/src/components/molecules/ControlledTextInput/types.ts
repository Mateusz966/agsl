import {UseControllerProps} from 'react-hook-form';

export interface ControlledTextInputProps<T> extends UseControllerProps<T> {
  isPassword?: boolean;
  error: boolean;
}
