import {useQuery} from '@tanstack/react-query';
import {getShoppingLists, ShoppingListResponse} from 'api/shopping-list';

const useShoppingLists = (isEnabled?: boolean) => {
  const {data, isLoading, refetch} = useQuery<ShoppingListResponse>({
    queryKey: ['shoppingLists'],
    queryFn: getShoppingLists,
    enabled: !!isEnabled,
  });

  const mappedShoppingLists =
    data?.userShoppingLists.map(shoppingList => ({
      id: shoppingList.id,
      createdAt: shoppingList.createdAt,
      generatedShoppingList: shoppingList.generatedShoppingList,
    })) ?? [];

  return {
    shoppingListsResponse: mappedShoppingLists ?? [],
    areShoppingListsLoading: isLoading,
    refetchShoppingLists: refetch,
  };
};

export default useShoppingLists;
