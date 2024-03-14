import {
  EditShoppingListRequest,
  IsBoughtType,
} from '../../../api/shopping-list/types';
import {useCallback} from 'react';
import {useDishContext} from '../../contexts/DishContext/useDishContext';
import {
  NavigationProp,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {shoppingListSchema} from './validation';
import useShoppingList from './useShoppingList';
import {useMutateShoppingList} from './useMutateShoppingList';
import {useShoppingListContext} from '../../contexts/ShoppingListContext/useShoppingListContext';
import {TabScenes} from '../../../navigators/BottomNavigation/types';
import {NavigationParamList} from '../../../navigators/types';

export const useShoppingListForm = () => {
  const {dishesList, setDishesList} = useDishContext();
  const {shoppingListId} = useShoppingListContext();
  const {shoppingListResponse, isShoppingListLoading} = useShoppingList(
    !!(dishesList.length && shoppingListId),
  );
  const {navigate} = useNavigation<NavigationProp<NavigationParamList>>();
  const {addShoppingListMutation, editDishMutationShoppingListMutation} =
    useMutateShoppingList();

  const form = useForm<EditShoppingListRequest>({
    resolver: zodResolver(shoppingListSchema),
    mode: 'onChange',
  });

  useFocusEffect(
    useCallback(() => {
      if (shoppingListResponse && !isShoppingListLoading) {
        const formValues = {
          listId: shoppingListResponse.listId,
          shoppingListItems: shoppingListResponse.generatedShoppingList?.map(
            response => ({
              ingredientId: response.ingredientId ?? '',
              isBought: String(response.isBought) as IsBoughtType,
            }),
          ),
        };
        form.setValue('listId', formValues.listId);
        form.setValue('shoppingListItems', formValues.shoppingListItems);
      }
    }, [shoppingListResponse, isShoppingListLoading, form]),
  );

  const handleCreateShoppingList = useCallback(() => {
    if (dishesList.length > 0) {
      const dishes = dishesList.map(dish => {
        return {id: dish.id ?? '', quantity: dish.count};
      });

      addShoppingListMutation.mutate({dishesId: dishes});
      navigate(TabScenes.TabUserShoppingLists);
    }
  }, [addShoppingListMutation, dishesList, navigate]);

  const handleResetBasket = useCallback(() => {
    setDishesList([]);
  }, [setDishesList]);

  const handleEditShoppingList = useCallback(
    (payload: EditShoppingListRequest) => {
      const filteredPayload = {
        listId: payload.listId,
        shoppingListItems: payload.shoppingListItems,
      };
      editDishMutationShoppingListMutation.mutate(filteredPayload);
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
