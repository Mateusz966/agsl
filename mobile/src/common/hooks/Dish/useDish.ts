import {useQuery} from '@tanstack/react-query';
import {DishResponse} from '../../../api/dish/types';
import {getDish} from '../../../api/dish';
import {useDishContext} from '../../contexts/DishContext/useDishContext';
import {useMemo} from 'react';

const useDish = (isEnabled?: boolean) => {
  const {dishId} = useDishContext();
  const {data, isLoading, refetch} = useQuery<DishResponse>({
    queryKey: ['dish', dishId],
    queryFn: () => getDish(dishId),
    enabled: isEnabled,
  });

  const mappedIngredients = useMemo(() => {
    return data?.ingredients.map(ingredient => ({
      ingredientId: ingredient.id,
      name: ingredient.name,
      amount: ingredient.amount,
      unit: ingredient.unit,
    }));
  }, [data?.ingredients]);

  const dish = {
    id: data?.id,
    name: data?.name,
    ingredients: mappedIngredients,
    photo: data?.photo,
  };

  return {
    dishResponse: dish as DishResponse,
    isDishLoading: isLoading,
    refetchDish: refetch,
  };
};

export default useDish;
