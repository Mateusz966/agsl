import {IsString, IsBoolean, IsDate, ValidateNested, IsUUID, IsInt, Min, IsIn, IsNumber} from 'class-validator';
import { Type } from 'class-transformer';

export class ShoppingListResponseDto {
  @IsUUID()
  id: string;

  @ValidateNested({ each: true })
  @Type(() => GeneratedShoppingListItem)
  generatedShoppingList: GeneratedShoppingListItem[];

  @IsBoolean()
  isDraft: boolean;

  @IsDate()
  createdAt: string;

  @IsDate()
  updatedAt: string;
}

class GeneratedShoppingListItem {
  @IsUUID()
  id: string;

  @IsDate()
  createdAt: string;

  @IsDate()
  updatedAt: string;

  @IsString()
  name: string;

  @IsNumber()
  @Min(0)
  amount: number;

  @IsString()
  unit: string;

  @IsBoolean()
  isBought: boolean;
}

