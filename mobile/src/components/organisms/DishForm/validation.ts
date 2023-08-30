import {z} from 'zod';
import {Unit} from './types';

const Ingredient = z.object({
  name: z.string().min(1, {message: 'Provide the name of ingredient'}),
  quantity: z.number().nonnegative({message: 'Provide a valid quantity'}),
  unit: z.nativeEnum(Unit),
});

export const addDishSchema = z.object({
  title: z.string().min(1, {message: 'Provide the name of your dish'}),
  photo: z.any(z.instanceof(Blob)),
  ingredient: z.array(Ingredient),
});

export type AddDish = z.infer<typeof addDishSchema>;
