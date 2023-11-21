import {useQuery} from '@tanstack/react-query';
import {DishResponse, Ingredient} from '../../../../api/dish/types';
import {getDish} from '../../../../api/dish';
import {useDishContext} from './DishContext/useDishContext';
import {useMemo} from 'react';

const useDish = () => {
  const {dishId} = useDishContext();
  const {data, isLoading, refetch} = useQuery<DishResponse>({
    queryKey: ['dish', dishId],
    queryFn: () => getDish(dishId),
  });

  const mappedIngredients = useMemo(() => {
    return data?.ingredients.map(ingredient => ({
      ingredientId: ingredient.id,
      name: ingredient.name,
      amount: ingredient.amount,
      unit: ingredient.unit,
    })) as Ingredient[];
  }, [data?.ingredients]);

  const dish = {
    id: data?.id,
    name: data?.name,
    ingredients: mappedIngredients,
    photo: data?.photo,
  };

  return {
    dishResponse: dish,
    isDishLoading: isLoading,
    refetchDish: refetch,
  };
};

export default useDish;
