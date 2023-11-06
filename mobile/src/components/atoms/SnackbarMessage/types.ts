import {Dispatch, SetStateAction} from 'react';

export interface SnackbarContextProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  handleOnDismiss: () => void;
  text: string;
  setText: Dispatch<SetStateAction<string>>;
}
