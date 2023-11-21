import {useCallback} from 'react';
import {DishPhoto, UseSelectPhotoProps} from './types';
import useDish from './useDish';
import {useFocusEffect} from '@react-navigation/native';

export const useSelectPhoto = ({
  setImg,
  handleOnModalDissmiss,
}: UseSelectPhotoProps) => {
  const {dishResponse} = useDish();

  const buttonHandler = useCallback(
    async (setPhotoHandler: () => Promise<DishPhoto>) => {
      const res = await setPhotoHandler();
      if (res) {
        setImg(res);
        handleOnModalDissmiss();
      } else {
        setImg(null);
      }
    },
    [handleOnModalDissmiss, setImg],
  );

  const handleImageDelete = useCallback(
    (formReset: () => void) => {
      formReset();
      setImg(null);
    },
    [setImg],
  );

  useFocusEffect(
    useCallback(() => {
      if (dishResponse.photo) {
        setImg({uri: dishResponse.photo});
      }
    }, [dishResponse.photo, setImg]),
  );

  return {buttonHandler, handleImageDelete};
};
