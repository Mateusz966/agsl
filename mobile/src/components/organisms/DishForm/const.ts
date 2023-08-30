import {CameraOptions} from 'react-native-image-picker';
import {Unit} from '../../../api/dish/types';

export const CAMERA_OPTIONS: CameraOptions = {
  cameraType: 'back',
  mediaType: 'photo',
};

export const DISH_UNITS = [
  {option: Unit.g, value: 'g'},
  {option: Unit.ml, value: 'ml'},
  {option: Unit.portion, value: 'portion'},
];
