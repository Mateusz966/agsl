import {useMutation, useQueryClient} from '@tanstack/react-query';
import {AxiosError} from 'axios';
import {addDish, editDish} from 'api/dish';
import {useSnackbarContext} from 'common/contexts/SnackbarContext/useSnackbarContext';
import {getSnackbarErrorMessage} from 'common/contexts/SnackbarContext/SnackbarContext.helpers';
import {EditDishRequest, UseMutateDishProps} from './useDish.types';
import useDish from './useDish';
import {useRoute} from '@react-navigation/native';
import {RootScenes} from 'navigators/RootNavigation';

export const useMutateDish = ({
  setIngredientIdsToDelete,
}: UseMutateDishProps) => {
  const {setSnackbarState} = useSnackbarContext();
  const routeName = useRoute().name;
  const {isDishLoading} = useDish(routeName === RootScenes.EditDish);
  const client = useQueryClient();

  const addDishMutation = useMutation<void, AxiosError, FormData>({
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
        text: `${getSnackbarErrorMessage(error?.status)}`,
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
        text: `${getSnackbarErrorMessage(error?.status)}`,
      });
    },
  });

  return {
    addDishMutation,
    editDishMutation,
    isFormLoading: isDishLoading,
  };
};
