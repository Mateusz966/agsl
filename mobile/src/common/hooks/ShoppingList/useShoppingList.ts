import {useQuery} from '@tanstack/react-query';
import {ShoppingList} from '../../../api/shopping-list/types';
import {useShoppingListContext} from '../../contexts/ShoppingListContext/useShoppingListContext';
import {getShoppingList} from '../../../api/shopping-list';

const useShoppingList = (isEnabled?: boolean) => {
  const {shoppingListId} = useShoppingListContext();
  const {data, isLoading, refetch} = useQuery<ShoppingList>({
    queryKey: ['shoppingList', shoppingListId],
    queryFn: () => getShoppingList(shoppingListId),
    enabled: isEnabled,
  });

  return {
    shoppingListResponse: data,
    isShoppingListLoading: isLoading,
    refetchShoppingList: refetch,
  };
};

export default useShoppingList;