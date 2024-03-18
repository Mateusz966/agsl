import {useMutation, useQueryClient} from '@tanstack/react-query';
import {AxiosError} from 'axios';
import {
  EditShoppingListRequest,
  ShoppingListRequest,
  createShoppingList,
  editShoppingList,
} from 'api/shopping-list';
import {useSnackbarContext} from 'common/contexts/SnackbarContext/useSnackbarContext';
import {getSnackbarErrorMessage} from 'common/contexts/SnackbarContext/SnackbarContext.helpers';
import {UseMutateShoppingListProps} from './useShoppingList.types';

export const useMutateShoppingList = ({
  handleResetBasket,
}: UseMutateShoppingListProps) => {
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
      handleResetBasket();
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
