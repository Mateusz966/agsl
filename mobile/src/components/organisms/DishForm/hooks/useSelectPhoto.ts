import {useCallback} from 'react';
import {Asset} from 'react-native-image-picker';
import {UseSelectPhotoProps} from './types';

export const useSelectPhoto = ({
  setImg,
  handleOnDissmiss,
}: UseSelectPhotoProps) => {
  const buttonHandler = useCallback(
    async (setPhotoHandler: () => Promise<Asset | null>) => {
      const res = await setPhotoHandler();
      if (res) {
        setImg(res);
        handleOnDissmiss();
      } else {
        setImg(null);
      }
    },
    [handleOnDissmiss, setImg],
  );

  const handleImageDelete = useCallback(
    (formReset: () => void) => {
      formReset();
      setImg(null);
    },
    [setImg],
  );

  return {buttonHandler, handleImageDelete};
};
