import {EditShoppingListRequest} from '../../../api/shopping-list/types';
import {useCallback, useState} from 'react';
import {useDishContext} from '../../contexts/DishContext/useDishContext';
import {
  NavigationProp,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import {RootStackParamList} from '../../../navigators/RootNavigation/types';
import {Scenes} from '../../../navigators/RootNavigation/const';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {shoppingListSchema} from './validation';
import useShoppingList from './useShoppingList';
import {useMutateShoppingList} from './useMutateShoppingList';
import {useShoppingListContext} from '../../contexts/ShoppingListContext/useShoppingListContext';

export const useShoppingListForm = () => {
  const {dishesList, setDishesList} = useDishContext();
  const {shoppingListId} = useShoppingListContext();
  const {shoppingListResponse, isShoppingListLoading} = useShoppingList(
    !!(dishesList.length && shoppingListId),
  );
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();
  const [formInitialized, setFormInitialized] = useState(false);
  const {addShoppingListMutation, editDishMutationShoppingListMutation} =
    useMutateShoppingList();

  const form = useForm<EditShoppingListRequest>({
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
              isBought: String(response.isBought),
            }),
          ),
        };
        form.reset(defaultValues);
        setFormInitialized(true);
      }
    }, [formInitialized, shoppingListResponse, isShoppingListLoading, form]),
  );

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
      const payloadEdited = {
        listId: payload.listId,
        shoppingListItems: payload.shoppingListItems.map(item => ({
          ingredientId: item.ingredientId,
          isBought: String(item.isBought),
        })),
      };
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
