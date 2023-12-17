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
import {RootStackParamList} from '../../../navigators/DefaultNavigation/types';
import {Scenes} from '../../../navigators/DefaultNavigation/const';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {ShoppingList, shoppingListSchema} from './validation';
import {AxiosError} from 'axios';
import useShoppingList from './useShoppingList';

export const useMutateShoppingList = () => {
  const {setSnackbarState} = useSnackbarContext();
  const {shoppingListResponse, isShoppingListLoading} = useShoppingList(true);
  const {dishesList, setDishesList} = useDishContext();
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();
  const [formInitialized, setFormInitialized] = useState(false);
  const queryClient = useQueryClient();

  const form = useForm<ShoppingList>({
    resolver: zodResolver(shoppingListSchema),
    mode: 'onChange',
  });

  useFocusEffect(
    useCallback(() => {
      if (!formInitialized && shoppingListResponse && !isShoppingListLoading) {
        const defaultValues = {
          listId: shoppingListResponse.listId,
          shoppingListItems: shoppingListResponse.generatedShoppingList?.map(
            response => ({
              ingredientId: response.ingredientId,
              isBought: response.isBought,
            }),
          ),
        };
        form.reset(defaultValues);
        setFormInitialized(true);
      }
    }, [formInitialized, shoppingListResponse, isShoppingListLoading, form]),
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
