import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {AddDish, addDishSchema} from './validation';
import {useMutation} from '@tanstack/react-query';
import {DishRequest, Unit} from '../../../api/dish/types';
import {addDish} from '../../../api/dish';
import {useState} from 'react';
import {Asset} from 'react-native-image-picker';

export const useAddDish = () => {
  const [img, setImg] = useState<Asset | null>(null);

  const form = useForm<AddDish>({
    resolver: zodResolver(addDishSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      photo: '',
      ingredients: [
        {
          name: '',
          amount: 0,
          unit: Unit.g,
        },
      ],
    },
  });

  const mutation = useMutation<void, void, FormData>({
    mutationFn: payload => {
      return addDish(payload);
    },
    onSuccess: () => {
      form.reset();
    },
    onError: error => {
      console.log(error);
    },
  });

  const onSubmit = (payload: DishRequest) => {
    console.log('pn', payload.name);
    console.log('pi', payload.ingredients);
    const photo = {
      uri: img?.uri,
      name: img?.fileName,
      type: img?.type,
    };
    const fd = new FormData();

    console.log(photo);

    fd.append('photo', photo);
    fd.append('ingredients', JSON.stringify(payload.ingredients));
    fd.append('name', payload.name);
    mutation.mutate(fd);
  };

  const onCancel = () => {
    form.reset();
  };

  return {form, mutation, onSubmit, onCancel, img, setImg};
};
