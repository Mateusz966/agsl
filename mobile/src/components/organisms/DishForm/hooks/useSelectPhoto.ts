import {useCallback} from 'react';
import {DishPhoto, UseSelectPhotoProps} from './types';

export const useSelectPhoto = ({
  setImg,
  handleOnDissmiss,
}: UseSelectPhotoProps) => {
  const buttonHandler = useCallback(
    async (setPhotoHandler: () => Promise<DishPhoto>) => {
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