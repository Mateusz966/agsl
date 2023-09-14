import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {AddDish, addDishSchema} from './validation';
import {useMutation} from '@tanstack/react-query';
import {DishRequest, Unit} from '../../../api/dish/types';

export const useAddDish = () => {
  const form = useForm<AddDish>({
    resolver: zodResolver(addDishSchema),
    mode: 'onChange',
    defaultValues: {
      title: '',
      photo: '',
      ingredients: [
        {
          name: '',
          quantity: 0,
          unit: Unit.g,
        },
      ],
    },
  });

  const mutation = useMutation<void, void, DishRequest>({
    onSuccess: () => {
      form.reset();
    },
    onError: error => {
      console.log(error);
    },
  });

  const onSubmit = (payload: DishRequest) => {
    mutation.mutate(payload);
  };

  return {form, mutation, onSubmit};
};
