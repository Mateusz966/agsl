import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {Dish, Unit} from './types';
import {AddDish, addDishSchema} from './validation';
import {useMutation} from '@tanstack/react-query';

export const useAddDish = () => {
  const form = useForm<AddDish>({
    resolver: zodResolver(addDishSchema),
    mode: 'onChange',
    defaultValues: {
      title: '',
      photo: '',
      ingredient: [
        {
          name: '',
          quantity: 0,
          unit: Unit.g,
        },
      ],
    },
  });

  const mutation = useMutation<void, void, Dish>({
    onSuccess: () => {
      form.reset();
    },
    onError: error => {
      console.log(error);
    },
  });

  const onSubmit = (payload: Dish) => {
    mutation.mutate(payload);
  };

  return {form, mutation, onSubmit};
};
