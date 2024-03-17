import {useCallback} from 'react';
import {DishPhoto, UseSelectDishPhotoProps} from './types';
import useDish from './useDish';
import {useFocusEffect, useRoute} from '@react-navigation/native';
import {RootScenes} from '../../../navigators/RootNavigation/types';

export const useSelectDishPhoto = ({
  setImg,
  handleOnModalDissmiss,
}: UseSelectDishPhotoProps) => {
  const {dishResponse} = useDish();
  const routeName = useRoute().name;

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
      if (dishResponse.photo && routeName === RootScenes.EditDish) {
        setImg({uri: dishResponse.photo});
      }
    }, [dishResponse.photo, setImg, routeName]),
  );

  return {buttonHandler, handleImageDelete};
};
