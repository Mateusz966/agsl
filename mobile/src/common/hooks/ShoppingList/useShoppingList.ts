import {useQuery} from '@tanstack/react-query';
import {ShoppingList} from '../../../api/shopping-list/types';
import {useShoppingListContext} from '../../contexts/ShoppingListContext/useShoppingListContext';
import {getShoppingList} from '../../../api/shopping-list';

const useShoppingList = (isEnabled?: boolean) => {
  const {shoppingListId} = useShoppingListContext();
  const {data, isLoading, refetch} = useQuery<ShoppingList>({
    queryKey: ['shoppingList', shoppingListId],
    queryFn: () => getShoppingList(shoppingListId),
    enabled: !!isEnabled,
  });

  const mappedShoppingList = {
    listId: data?.id,
    createdAt: data?.createdAt,
    generatedShoppingList: data?.generatedShoppingList.map(ingredient => ({
      ingredientId: ingredient.id,
      unit: ingredient.unit,
      name: ingredient.name,
      amount: ingredient.amount,
      isBought: ingredient.isBought,
    })),
  };

  return {
    shoppingListResponse: mappedShoppingList,
    isShoppingListLoading: isLoading,
    refetchShoppingList: refetch,
  };
};

export default useShoppingList;
