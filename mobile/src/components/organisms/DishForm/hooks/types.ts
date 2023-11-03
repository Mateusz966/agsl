import {Dispatch, SetStateAction} from 'react';
import {Asset} from 'react-native-image-picker';

export type DishPhoto = Asset | null;

export interface UseAddDishProps {
  img: DishPhoto;
}

export interface UseSelectPhotoProps {
  setImg: Dispatch<SetStateAction<DishPhoto>>;
  handleOnDissmiss: () => void;
}
