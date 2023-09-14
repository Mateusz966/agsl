import {CameraOptions} from 'react-native-image-picker';
import {Unit} from '../../../api/dish/types';

export const CAMERA_OPTIONS: CameraOptions = {
  cameraType: 'back',
  mediaType: 'photo',
};

export const DISH_UNITS = [
  {label: Unit.g, value: 'g'},
  {label: Unit.ml, value: 'ml'},
  {label: Unit.portion, value: 'portion'},
];
