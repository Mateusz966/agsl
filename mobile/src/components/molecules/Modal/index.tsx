import * as React from 'react';
import {FC, PropsWithChildren, memo, useState} from 'react';
import {
  ModalProps,
  Modal as PaperModal,
  Portal,
  Text,
} from 'react-native-paper';
import Button from '../Button';
import {ButtonType} from '../Button/types';

const Modal = ({visible, children, onDismiss, ...props}: ModalProps) => {
  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <Portal>
      <PaperModal
        visible={visible}
        onDismiss={onDismiss}
        contentContainerStyle={containerStyle}
        {...props}>
        {children}
      </PaperModal>
    </Portal>
  );
};

export default memo(Modal);
