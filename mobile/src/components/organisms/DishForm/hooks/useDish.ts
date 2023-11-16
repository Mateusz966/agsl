import {useQuery} from '@tanstack/react-query';
import {DishResponse, Ingredient} from '../../../../api/dish/types';
import {getDish} from '../../../../api/dish';
import {useDishContext} from './DishContext/useDishContext';

const useDish = () => {
  const {dishId} = useDishContext();
  const {data, isLoading, refetch} = useQuery<DishResponse>({
    queryKey: ['dish'],
    queryFn: () => getDish(dishId),
  });

  const mappedIngredients = data?.ingredients.map(ingredient => ({
    id: ingredient.id,
    name: ingredient.name,
    amount: ingredient.amount,
    unit: ingredient.unit,
  })) as Ingredient[];

  const dish = {
    id: data?.id,
    name: data?.name,
    ingredients: mappedIngredients,
    photo: data?.photo,
  };
  return {
    response: dish,
    isLoading,
    refetch,
  };
};

export default useDish;
