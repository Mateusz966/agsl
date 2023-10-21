import Message from '../../atoms/Message';
import ActionButtonsContainer from '../../molecules/ActionButtonsContainer';
import Modal from '../../molecules/Modal';
import React, {FC, memo} from 'react';
import styles from './styles';
import {OpenGalleryModalProps} from './types';
import {
  handleSetPhoto,
  handleTakePhoto,
} from '../../../utils/CameraSettings/helpers';

const OpenGalleryModal: FC<OpenGalleryModalProps> = ({
  buttonHandler,
  visible,
  handleOnDissmiss,
}) => (
  <Modal onDismiss={handleOnDissmiss} visible={visible}>
    <Message message="Add photo" style={styles.modalTitle} />
    <Message
      message="You can select your dish photo from gallery or take the photo directly"
      style={styles.modalBody}
    />
    <ActionButtonsContainer
      primaryButtonText="Gallery"
      primaryButtonHandler={() => buttonHandler(handleSetPhoto)}
      secondaryButtonText="Camera"
      secondaryButtonHandler={() => buttonHandler(handleTakePhoto)}
      containerStyle={styles.modalButtonsContainer}
    />
  </Modal>
);

export default memo(OpenGalleryModal);
