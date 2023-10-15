import {Dispatch, SetStateAction} from 'react';
import {Asset} from 'react-native-image-picker';

export interface UseAddDishProps {
  img: Asset | null;
}

export interface UseSelectPhotoProps {
  setImg: Dispatch<SetStateAction<Asset | null>>;
  handleOnDissmiss: () => void;
}
