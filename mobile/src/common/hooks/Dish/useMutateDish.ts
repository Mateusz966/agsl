import {useMutation} from '@tanstack/react-query';
import {addDish, editDish} from '../../../api/dish';
import {useSnackbarContext} from '../../contexts/SnackbarContext/useSnackbarContext';
import {EditDishRequest, UseMutateDishProps} from './types';
import {AxiosError} from 'axios';
import useDish from './useDish';
import useDishList from '../../../components/organisms/DishListView/useDishList';
import {useFocusEffect} from '@react-navigation/native';
import {useCallback} from 'react';

export const useMutateDish = ({
  setIngredientIdsToDelete,
}: UseMutateDishProps) => {
  const {setText, setVisible} = useSnackbarContext();
  const {refetchDish, isDishLoading} = useDish();

  const {refetchDishList} = useDishList();

  const addDishMutation = useMutation<void, void, FormData>({
    mutationFn: payload => addDish(payload),
    onSuccess: () => {
      setVisible(true);
      setText('Your dish was added sucessfully');
      refetchDishList();
    },
    onError: error => {
      setVisible(true);
      setText(`${error}`);
    },
  });

  const editDishMutation = useMutation<void, AxiosError, EditDishRequest>({
    mutationFn: payload => editDish(payload),
    onSuccess: async () => {
      setIngredientIdsToDelete([]);
      setVisible(true);
      setText('Your dish was edited sucessfully');
      refetchDish();
      refetchDishList();
    },
    onError: error => {
      setVisible(true);
      setText(`${error}`);
    },
  });

  useFocusEffect(
    useCallback(() => {
      return () => setVisible(false);
    }, [setVisible]),
  );

  return {
    addDishMutation,
    editDishMutation,
    isFormLoading: isDishLoading,
  };
};
