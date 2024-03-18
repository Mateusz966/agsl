import React, {FC, memo} from 'react';
import {Message} from 'atoms';
import {handleSetPhoto, handleTakePhoto} from 'CameraSettings';
import {Modal, ActionButtonsContainer} from 'molecules';
import {OpenGalleryModalProps, styles} from '.';

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
      primaryButtonProps={{
        onPress: () => buttonHandler(handleSetPhoto),
        text: 'Gallery',
      }}
      secondaryButtonProps={{
        onPress: () => buttonHandler(handleTakePhoto),
        text: 'Camera',
      }}
      containerStyle={styles.modalButtonsContainer}
    />
  </Modal>
);

export default memo(OpenGalleryModal);
