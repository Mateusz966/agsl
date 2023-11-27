import {useMutation} from '@tanstack/react-query';
import {ShoppingListRequest} from '../../../api/shopping-list/types';
import {createShoppingList} from '../../../api/shopping-list';
import {useSnackbarContext} from '../../../common/contexts/SnackbarContext/useSnackbarContext';
import {useCallback} from 'react';
import {useDishContext} from '../../../common/contexts/DishContext/useDishContext';

export const useMutateShoppingList = () => {
  const {setText, setVisible} = useSnackbarContext();
  const {dishesList, setDishesList} = useDishContext();

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
  }, [addShoppingListMutation, dishesList]);

  const handleResetBasket = useCallback(() => {
    setDishesList([]);
  }, [setDishesList]);

  return {
    handleCreateShoppingList,
    handleResetBasket,
  };
};
