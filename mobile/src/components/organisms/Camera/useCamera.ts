import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {CAMERA_OPTIONS} from '../DishForm/const';
import requestCameraPermission from './permissions';

export const useCamera = () => {
  const handleLaunchCamera = async () => {
    await requestCameraPermission();
    return launchCamera(CAMERA_OPTIONS, response => {
      console.log(response);
      return response;
    });
  };
  const handleLaunchImageLibrary = () =>
    launchImageLibrary(CAMERA_OPTIONS, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else {
        return response;
      }
    });

  return {handleLaunchCamera, handleLaunchImageLibrary};
};
