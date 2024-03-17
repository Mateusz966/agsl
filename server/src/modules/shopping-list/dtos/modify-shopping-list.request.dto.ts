import {
  ArrayNotEmpty,
  IsArray,
  IsBoolean,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class Ingredient {
  @IsUUID()
  ingredientId: string;

  @IsBoolean()
  isBought: boolean;
}
export class ModifyShoppingListRequestDto {
  @IsArray({ message: 'ingredients must be an array' })
  @ArrayNotEmpty({ message: 'ingredients should not be empty' })
  @ValidateNested({ each: true })
  @Type(() => Ingredient)
  ingredients: Ingredient[];
}
