import {useQuery} from '@tanstack/react-query';
import {getDishList} from '../../../api/dish';
import {DishListResponse} from './types';
import {useDishContext} from '../../../common/contexts/DishContext/useDishContext';

const useDishList = () => {
  const {dishId} = useDishContext();
  const {data, isLoading, refetch} = useQuery<DishListResponse[]>({
    queryKey: ['dishList', dishId],
    queryFn: getDishList,
  });

  return {
    dishListResponse: data ?? [],
    isDishListLoading: isLoading,
    refetchDishList: refetch,
  };
};

export default useDishList;
