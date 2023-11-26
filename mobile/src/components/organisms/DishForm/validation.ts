import {z} from 'zod';
import {Unit} from '../../../api/dish/types';

const Ingredient = z.object({
  ingredientId: z.string().optional(),
  name: z.string().min(1, {message: 'Provide name'}),
  amount: z
    .string()
    .refine(value => /^\d+$/.test(value), {
      message: 'Provide amount',
    })
    .refine(value => parseInt(value, 10) > 0, {
      message: 'Proide amount greater than 0',
    }),
  unit: z.nativeEnum(Unit),
});
export const addDishSchema = z.object({
  name: z.string().min(1, {message: 'Provide the name of your dish'}),
  photo: z.any(z.instanceof(Blob)),
  ingredients: z.array(Ingredient),
});

export type AddDish = z.infer<typeof addDishSchema>;
