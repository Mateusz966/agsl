import {useCallback} from 'react';
import {
  NavigationProp,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {EditShoppingListRequest} from 'api/shopping-list/types';
import {useDishContext} from 'common/contexts/DishContext/useDishContext';
import {useShoppingListContext} from 'common/contexts/ShoppingListContext/useShoppingListContext';
import {shoppingListSchema} from './shoppingListValidation';
import {TabScenes} from 'navigators/TabNavigation';
import {NavigationParamList} from 'navigators/types';
import {useMutateShoppingList, useShoppingList} from '.';

export const useShoppingListForm = () => {
  const {dishesList, setDishesList} = useDishContext();
  const {shoppingListId} = useShoppingListContext();
  const {shoppingListResponse, isShoppingListLoading} = useShoppingList(
    !!(dishesList.length && shoppingListId),
  );
  const {navigate} = useNavigation<NavigationProp<NavigationParamList>>();

  const handleResetBasket = useCallback(() => {
    setDishesList([]);
  }, [setDishesList]);

  const {addShoppingListMutation, editDishMutationShoppingListMutation} =
    useMutateShoppingList({handleResetBasket: handleResetBasket});

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
              isBought: response.isBought,
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
