import {z} from 'zod';
import {Unit} from '../../../api/dish/types';

const Ingredient = z.object({
  name: z.string().min(1, {message: 'Provide the name of ingredient'}),
  amount: z.number().nonnegative({message: 'Provide a valid quantity'}),
  unit: z.nativeEnum(Unit),
});

export type Ingredient = z.infer<typeof Ingredient>;

export const addDishSchema = z.object({
  name: z.string().min(1, {message: 'Provide the name of your dish'}),
  photo: z.any(z.instanceof(Blob)),
  ingredients: z.array(z.custom<Ingredient>()),
});

export type AddDish = z.infer<typeof addDishSchema>;
