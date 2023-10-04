import * as React from 'react';
import {FC, memo} from 'react';
import {ModalProps, Modal as PaperModal, Portal} from 'react-native-paper';
import {styles} from './styles';

const Modal: FC<ModalProps> = ({visible, children, onDismiss, ...props}) => (
  <Portal>
    <PaperModal
      visible={visible}
      onDismiss={onDismiss}
      contentContainerStyle={styles.containerStyle}
      {...props}>
      {children}
    </PaperModal>
  </Portal>
);

export default memo(Modal);
