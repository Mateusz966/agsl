import {TextInput} from 'react-native-paper';
export type TextInputProps = React.ComponentProps<typeof TextInput> & {
  errorText?: string;
};
