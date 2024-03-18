import {useQuery} from '@tanstack/react-query';
import {useShoppingListContext} from 'common/contexts/ShoppingListContext/useShoppingListContext';
import {getShoppingList} from 'api/shopping-list';

const useShoppingList = (isEnabled?: boolean) => {
  const {shoppingListId} = useShoppingListContext();
  const {data, isLoading, refetch} = useQuery({
    queryKey: ['shoppingList', shoppingListId],
    queryFn: () => getShoppingList(shoppingListId),
    enabled: !!isEnabled,
  });

  return {
    shoppingListResponse: data,
    isShoppingListLoading: isLoading,
    refetchShoppingList: refetch,
  };
};

export default useShoppingList;
