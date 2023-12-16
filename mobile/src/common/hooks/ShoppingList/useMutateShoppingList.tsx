import {useMutation, useQueryClient} from '@tanstack/react-query';
import {
  EditShoppingListRequest,
  ShoppingListRequest,
} from '../../../api/shopping-list/types';
import {createShoppingList, editShoppingList} from '../../../api/shopping-list';
import {useSnackbarContext} from '../../contexts/SnackbarContext/useSnackbarContext';
import {useCallback, useState} from 'react';
import {useDishContext} from '../../contexts/DishContext/useDishContext';
import {
  NavigationProp,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import {RootStackParamList} from '../../../navigators/types';
import {Scenes} from '../../../navigators/const';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {ShoppingList, shoppingListSchema} from './validation';
import {useShoppingListContext} from '../../contexts/ShoppingListContext/useShoppingListContext';
import {AxiosError} from 'axios';
import useShoppingList from './useShoppingList';

export const useMutateShoppingList = () => {
  const {setSnackbarState} = useSnackbarContext();
  const {shoppingListResponse, isShoppingListLoading} = useShoppingList();
  const generatedShoppingList = shoppingListResponse?.generatedShoppingList.map(
    ingredient => ({
      ingredientId: ingredient.id ?? '',
      isBought: ingredient.isBought,
    }),
  );
  const {dishesList, setDishesList} = useDishContext();
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();
  const {shoppingListId} = useShoppingListContext();
  const [formInitialized, setFormInitialized] = useState(false);
  const queryClient = useQueryClient();

  const form = useForm<ShoppingList>({
    resolver: zodResolver(shoppingListSchema),
    mode: 'onChange',
    defaultValues: {
      listId: shoppingListId,
      shoppingListItems: generatedShoppingList,
    },
  });

  useFocusEffect(
    useCallback(() => {
      if (!formInitialized && shoppingListResponse && !isShoppingListLoading) {
        form.reset(generatedShoppingList);
        setFormInitialized(true);
      }
    }, [
      formInitialized,
      shoppingListResponse,
      isShoppingListLoading,
      form,
      generatedShoppingList,
    ]),
  );

  const addShoppingListMutation = useMutation<void, void, ShoppingListRequest>({
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
        text: `${error}`,
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
        text: `${error}`,
      });
    },
  });

  const handleCreateShoppingList = useCallback(() => {
    if (dishesList.length > 0) {
      const dishes = dishesList.map(dish => {
        return {id: dish.id ?? '', quantity: dish.count};
      });

      addShoppingListMutation.mutate({dishesId: dishes});
      navigate(Scenes.UserShoppingLists);
    }
  }, [addShoppingListMutation, dishesList, navigate]);

  const handleResetBasket = useCallback(() => {
    setDishesList([]);
  }, [setDishesList]);

  const handleEditShoppingList = useCallback(
    (payload: EditShoppingListRequest) => {
      editDishMutationShoppingListMutation.mutate(payload);
    },
    [editDishMutationShoppingListMutation],
  );

  return {
    form,
    handleCreateShoppingList,
    handleResetBasket,
    handleEditShoppingList,
  };
};
