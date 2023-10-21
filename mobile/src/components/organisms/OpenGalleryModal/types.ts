import {Asset} from 'react-native-image-picker';

export interface OpenGalleryModalProps {
  buttonHandler: (
    setPhotoHandler: () => Promise<Asset | null>,
  ) => Promise<void>;
  visible: boolean;
  handleOnDissmiss: () => void;
}
