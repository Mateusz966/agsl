import {useMutation} from '@tanstack/react-query';
import {ShoppingListRequest} from '../../../api/shopping-list/types';
import {createShoppingList} from '../../../api/shopping-list';
import {useSnackbarContext} from '../../contexts/SnackbarContext/useSnackbarContext';
import {useCallback} from 'react';
import {useDishContext} from '../../contexts/DishContext/useDishContext';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../navigators/types';
import {Scenes} from '../../../navigators/const';

export const useMutateShoppingList = () => {
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

  const handleCreateShoppingList = useCallback(() => {
    const dishes = dishesList.map(dish => {
      return {id: dish.id ?? '', quantity: dish.count};
    });

    addShoppingListMutation.mutate({dishesId: dishes});
    navigate(Scenes.ShoppingList);
  }, [addShoppingListMutation, dishesList, navigate]);

  const handleResetBasket = useCallback(() => {
    setDishesList([]);
  }, [setDishesList]);

  return {
    handleCreateShoppingList,
    handleResetBasket,
  };
};
