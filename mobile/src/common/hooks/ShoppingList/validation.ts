import {z} from 'zod';

const ShoppingListElement = z.object({
  ingredientId: z.string(),
  isBought: z.boolean(),
});
export const shoppingListSchema = z.object({
  listId: z.string(),
  shoppingListItems: z.array(ShoppingListElement),
});

export type ShoppingList = z.infer<typeof shoppingListSchema>;
