import {useQuery} from '@tanstack/react-query';
import {getDishList} from 'api/dish';
import {DishListResponse} from './DishListView.types';

const useDishList = () => {
  const {data, isLoading, refetch} = useQuery<DishListResponse[]>({
    queryKey: ['dishList'],
    queryFn: getDishList,
  });

  return {
    dishListResponse: data ?? [],
    isDishListLoading: isLoading,
    refetchDishList: refetch,
  };
};

export default useDishList;
