import {
  Asset,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import {CAMERA_OPTIONS} from '../DishForm/const';
import requestCameraPermission from './permissions';
import {Dispatch, SetStateAction} from 'react';

export const handleLaunchCamera = async () => {
  await requestCameraPermission();
  return launchCamera(CAMERA_OPTIONS, response => {
    console.log(response);
    return response;
  });
};

export const handleLaunchImageLibrary = () =>
  launchImageLibrary(CAMERA_OPTIONS, response => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else {
      return response;
    }
  });

export const handleTakePhoto = async (
  setImgUrl: Dispatch<SetStateAction<Asset | null>>,
) => {
  await handleLaunchCamera().then(res => {
    if (res.assets) {
      setImgUrl(res.assets[0]);
    } else {
      setImgUrl(null);
    }
  });
};

export const handleSetPhoto = async (
  setImgUrl: Dispatch<SetStateAction<Asset | null>>,
) => {
  await handleLaunchImageLibrary().then(res => {
    if (res.assets) {
      setImgUrl(res.assets[0]);
    } else {
      setImgUrl(null);
    }
  });
};
