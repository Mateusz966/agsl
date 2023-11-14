import {Dispatch, SetStateAction} from 'react';
import {Asset} from 'react-native-image-picker';

export type DishPhoto = Asset | null;

export interface UseMutateDishProps {
  img: DishPhoto;
  idsToDelete?: string[];
  setIdsToDelete: Dispatch<SetStateAction<string[]>>;
}

export interface UseSelectPhotoProps {
  setImg: Dispatch<SetStateAction<DishPhoto>>;
  handleOnModalDissmiss: () => void;
}

export interface EditDishRequest {
  id: string;
  dish: FormData;
}
