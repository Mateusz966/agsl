import {z} from 'zod';

const ShoppingListElement = z.object({
  ingredientId: z.string().optional(),
  isBought: z.boolean(),
});
export const shoppingListSchema = z.object({
  listId: z.string().optional(),
  shoppingListElements: z.array(ShoppingListElement),
});

export type ShoppingList = z.infer<typeof shoppingListSchema>;
