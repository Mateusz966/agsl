import {Dispatch, SetStateAction} from 'react';
import {Asset} from 'react-native-image-picker';

export type DishPhoto = Asset | null;

export interface UseMutateDishProps {
  setIngredientIdsToDelete: Dispatch<SetStateAction<string[]>>;
}

export interface UseSelectDishPhotoProps {
  setImg: Dispatch<SetStateAction<DishPhoto>>;
  handleOnModalDissmiss: () => void;
}

export interface EditDishRequest {
  id: string;
  dish: FormData;
}

export interface UseDishFormProps {
  img: DishPhoto;
}
