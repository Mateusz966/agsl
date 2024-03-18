import {SnackbarProps as PaperSnackbarProps} from 'react-native-paper';

export interface SnackbarProps extends PaperSnackbarProps {
  isError: boolean;
}
