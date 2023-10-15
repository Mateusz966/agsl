import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {AddDish, addDishSchema} from '../validation';
import {useMutation} from '@tanstack/react-query';
import {DishRequest, Unit} from '../../../../api/dish/types';
import {addDish} from '../../../../api/dish';
import {useState} from 'react';
import {useSnackbarVisibility} from '../../../atoms/SnackbarMessage/useSnackbarVisibility';
import {UseAddDishProps} from './types';

export const useAddDish = ({img}: UseAddDishProps) => {
  const {visible, setVisible, handleOnDissmiss} = useSnackbarVisibility();
  const [text, setText] = useState('');
  console.log(img, 'image');

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
      setVisible(true);
      setText('Your dish was added sucessfully');
      form.reset();
    },
    onError: error => {
      setVisible(true);
      console.log(error);
      setText(`${error}`);
    },
  });

  const onSubmit = (payload: DishRequest) => {
    console.log(payload);
    const photo = {
      uri: img?.uri,
      name: img?.fileName,
      type: img?.type,
    };
    const fd = new FormData();
    fd.append('photo', photo);
    fd.append('ingredients', JSON.stringify(payload.ingredients));
    fd.append('name', payload.name);
    mutation.mutate(fd);
  };

  const onCancel = () => {
    form.reset();
  };

  return {
    text,
    form,
    mutation,
    onSubmit,
    onCancel,
    visible,
    handleOnDissmiss,
  };
};
