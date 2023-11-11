import {DishPhoto} from '../DishForm/hooks/types';

export interface OpenGalleryModalProps {
  buttonHandler: (setPhotoHandler: () => Promise<DishPhoto>) => Promise<void>;
  visible: boolean;
  handleOnDissmiss: () => void;
}
