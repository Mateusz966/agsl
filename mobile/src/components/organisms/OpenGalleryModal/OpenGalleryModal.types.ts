import {DishPhoto} from 'common/hooks/Dish/useDish.types';

export interface OpenGalleryModalProps {
  buttonHandler: (setPhotoHandler: () => Promise<DishPhoto>) => Promise<void>;
  visible: boolean;
  handleOnDissmiss: () => void;
}
