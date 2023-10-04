import {
  Asset,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import {CAMERA_OPTIONS} from './const';
import requestCameraPermission from './permissions';

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

export const handleTakePhoto = async () =>
  handleLaunchCamera().then(res => {
    if (res.assets) {
      return res.assets[0];
    } else {
      return null;
    }
  });

export const handleSetPhoto = async () =>
  handleLaunchImageLibrary().then(res => {
    if (res.assets) {
      return res.assets[0];
    } else {
      return null;
    }
  });
