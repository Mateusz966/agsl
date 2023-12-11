import {useMutation} from '@tanstack/react-query';
import {addDish, editDish} from '../../../api/dish';
import {useSnackbarContext} from '../../contexts/SnackbarContext/useSnackbarContext';
import {EditDishRequest, UseMutateDishProps} from './types';
import {AxiosError} from 'axios';
import useDish from './useDish';
import useDishList from '../../../components/organisms/DishListView/useDishList';

export const useMutateDish = ({
  setIngredientIdsToDelete,
}: UseMutateDishProps) => {
  const {setSnackbarState} = useSnackbarContext();
  const {refetchDish, isDishLoading} = useDish();

  const {refetchDishList} = useDishList();

  const addDishMutation = useMutation<void, void, FormData>({
    mutationFn: payload => addDish(payload),
    onSuccess: () => {
      setSnackbarState({
        visible: true,
        text: 'Your dish was added sucessfully',
      });
      refetchDishList();
    },
    onError: error => {
      setSnackbarState({
        visible: true,
        text: `${error}`,
      });
    },
  });

  const editDishMutation = useMutation<void, AxiosError, EditDishRequest>({
    mutationFn: payload => editDish(payload),
    onSuccess: async () => {
      setIngredientIdsToDelete([]);
      setSnackbarState({
        visible: true,
        text: 'Your dish was edited sucessfully',
      });
      refetchDish();
      refetchDishList();
    },
    onError: error => {
      setSnackbarState({
        visible: true,
        text: `${error}`,
      });
    },
  });

  return {
    addDishMutation,
    editDishMutation,
    isFormLoading: isDishLoading,
  };
};
