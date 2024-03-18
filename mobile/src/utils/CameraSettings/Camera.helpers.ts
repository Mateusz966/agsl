import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {CAMERA_OPTIONS} from './Camera.const';
import {requestCameraPermission} from './Camera.permissions';

export const handleLaunchCamera = async () => {
  await requestCameraPermission();
  return launchCamera(CAMERA_OPTIONS, response => {
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

export const handleTakePhoto = async () => {
  const response = await handleLaunchCamera();
  if (response.assets) {
    return response.assets[0];
  } else {
    return null;
  }
};

export const handleSetPhoto = async () => {
  const response = await handleLaunchImageLibrary();
  if (response.assets) {
    return response.assets[0];
  } else {
    return null;
  }
};
