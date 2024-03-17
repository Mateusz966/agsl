import {Dispatch, SetStateAction} from 'react';

export interface SnackbarStateProps {
  visible: boolean;
  text?: string;
  isError?: boolean;
}
export interface SnackbarContextProps {
  setSnackbarState: Dispatch<SetStateAction<SnackbarStateProps>>;
}
