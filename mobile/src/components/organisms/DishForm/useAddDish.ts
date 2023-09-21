import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {AddDish, addDishSchema} from './validation';
import {useMutation} from '@tanstack/react-query';
import {DishRequest, Unit} from '../../../api/dish/types';
import {addDish} from '../../../api/dish';

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
    mutationFn: payload => {
      return addDish(payload);
    },
    onSuccess: () => {
      form.reset();
    },
    onError: error => {},
  });

  const onSubmit = (payload: DishRequest) => {
    console.log(payload, 'payload');
    mutation.mutate(payload);
  };

  const onCancel = () => {
    form.reset();
  };

  return {form, mutation, onSubmit, onCancel};
};
