import {TextInput} from 'react-native-paper';
import {UseControllerProps} from 'react-hook-form';

export type TextInputProps = React.ComponentProps<typeof TextInput> &
  UseControllerProps;
