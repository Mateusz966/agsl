import {z} from 'zod';

const ShoppingListElement = z.object({
  ingredientId: z.string(),
  isBought: z.enum(['true', 'false']),
});
export const shoppingListSchema = z.object({
  listId: z.string(),
  shoppingListItems: z.array(ShoppingListElement),
});
