import {useMutation} from '@tanstack/react-query';
import {
  EditShoppingListRequest,
  ShoppingListRequest,
} from '../../../api/shopping-list/types';
import {createShoppingList, editShoppingList} from '../../../api/shopping-list';
import {useSnackbarContext} from '../../contexts/SnackbarContext/useSnackbarContext';
import {useCallback} from 'react';
import {useDishContext} from '../../contexts/DishContext/useDishContext';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../navigators/types';
import {Scenes} from '../../../navigators/const';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {ShoppingList, shoppingListSchema} from './validation';
import {useShoppingListContext} from '../../contexts/ShoppingListContext/useShoppingListContext';
import {UseMutateShoppingListProps} from './types';

export const useMutateShoppingList = ({ingredients}: UseMutateShoppingListProps) => {
  const {shoppingListId} = useShoppingListContext()

  const form = useForm<ShoppingList>({
    resolver: zodResolver(shoppingListSchema),
    mode: 'onChange',
    defaultValues: {
      listId: shoppingListId,
      shoppingListElements: [{ingredientId: ingredientS., isBought: false}],
    },
  });

  const {setText, setVisible} = useSnackbarContext();
  const {dishesList, setDishesList} = useDishContext();
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();

  const addShoppingListMutation = useMutation<void, void, ShoppingListRequest>({
    mutationFn: payload => createShoppingList(payload),
    onSuccess: () => {
      setVisible(true);
      setText('Your shopping list was created successfully');
    },
    onError: error => {
      setVisible(true);
      setText(`${error}`);
    },
  });

  const editDishMutationShoppingListMutation = useMutation<
    void,
    void,
    EditShoppingListRequest
  >({
    mutationFn: payload => editShoppingList(payload),
    onSuccess: () => {
      setVisible(true);
      setText('Your shopping list was created successfully');
    },
    onError: error => {
      setVisible(true);
      setText(`${error}`);
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
