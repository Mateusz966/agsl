import {useMutation, useQueryClient} from '@tanstack/react-query';
import {addDish, editDish} from '../../../api/dish';
import {useSnackbarContext} from '../../contexts/SnackbarContext/useSnackbarContext';
import {EditDishRequest, UseMutateDishProps} from './types';
import {AxiosError} from 'axios';
import useDish from './useDish';
import {useRoute} from '@react-navigation/native';
import {Scenes} from '../../../navigators/const';

export const useMutateDish = ({
  setIngredientIdsToDelete,
}: UseMutateDishProps) => {
  const {setSnackbarState} = useSnackbarContext();
  const routeName = useRoute().name;
  const {isDishLoading} = useDish(routeName === Scenes.EditDish);
  const client = useQueryClient();

  const addDishMutation = useMutation<void, void, FormData>({
    mutationFn: payload => addDish(payload),
    onSuccess: () => {
      setSnackbarState({
        visible: true,
        text: 'Your dish was added sucessfully',
      });
      client.invalidateQueries();
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
      client.invalidateQueries();
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
