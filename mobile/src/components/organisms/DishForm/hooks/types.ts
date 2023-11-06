import {Dispatch, SetStateAction} from 'react';
import {Asset} from 'react-native-image-picker';

export type DishPhoto = Asset | null;

export interface UseMutateDishProps {
  img: DishPhoto;
}

export interface UseSelectPhotoProps {
  setImg: Dispatch<SetStateAction<DishPhoto>>;
  handleOnDissmiss: () => void;
}

export interface EditDishRequest {
  id: string;
  dishData: FormData;
}
