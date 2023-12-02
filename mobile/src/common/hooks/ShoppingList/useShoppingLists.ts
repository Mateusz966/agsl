import {useQuery} from '@tanstack/react-query';
import {getShoppingLists} from '../../../api/shopping-list';
import {ShoppingListResponse} from '../../../api/shopping-list/types';

const useShoppingLists = () => {
  const {data, isLoading, refetch} = useQuery<ShoppingListResponse>({
    queryKey: ['shoppingLists'],
    queryFn: getShoppingLists,
  });

  const mappedShoppingLists =
    data?.userShoppingLists.map(shoppingList => ({
      id: shoppingList.id,
      generatedShoppingList: shoppingList.generatedShoppingList,
    })) ?? [];

  return {
    shoppingListsResponse: mappedShoppingLists ?? [],
    areShoppingListsLoading: isLoading,
    refetchShoppingLists: refetch,
  };
};

export default useShoppingLists;
