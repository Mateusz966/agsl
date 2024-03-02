import {useMutation, useQueryClient} from '@tanstack/react-query';
import {
  EditShoppingListRequest,
  ShoppingListRequest,
} from '../../../api/shopping-list/types';
import {createShoppingList, editShoppingList} from '../../../api/shopping-list';
import {useSnackbarContext} from '../../contexts/SnackbarContext/useSnackbarContext';
import {AxiosError} from 'axios';
import {getSnackbarErrorMessage} from '../../contexts/SnackbarContext/helpers';

export const useMutateShoppingList = () => {
  const {setSnackbarState} = useSnackbarContext();
  const queryClient = useQueryClient();

  const addShoppingListMutation = useMutation<
    void,
    AxiosError,
    ShoppingListRequest
  >({
    mutationFn: payload => createShoppingList(payload),
    onSuccess: () => {
      setSnackbarState({
        visible: true,
        text: 'Your shopping list was created successfully',
      });
      queryClient.invalidateQueries();
    },
    onError: error => {
      setSnackbarState({
        visible: true,
        text: `${getSnackbarErrorMessage(error?.status)}`,
      });
    },
  });

  const editDishMutationShoppingListMutation = useMutation<
    void,
    AxiosError,
    EditShoppingListRequest
  >({
    mutationFn: async (payload: EditShoppingListRequest) => {
      await editShoppingList(payload);
    },
    onSuccess: () => {
      setSnackbarState({
        visible: true,
        text: 'Your shopping list was edited successfully',
      });
      queryClient.invalidateQueries();
    },
    onError: error => {
      setSnackbarState({
        visible: true,
        text: `${getSnackbarErrorMessage(error?.status)}`,
      });
    },
  });

  return {
    addShoppingListMutation,
    editDishMutationShoppingListMutation,
  };
};
