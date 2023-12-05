import {
  IsString,
  IsBoolean,
  IsDate,
  ValidateNested,
  IsUUID,
  Min,
  IsNumber,
  IsEnum,
} from 'class-validator';
import { Type } from 'class-transformer';

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

export enum ShoppingListStatus {
  Draft = 'Draft',
  Accepted = 'Accepted',
  Ended = 'Ended',
}

export class ShoppingListResponseDto {
  @IsUUID()
  id: string;

  @ValidateNested({ each: true })
  @Type(() => GeneratedShoppingListItem)
  generatedShoppingList: GeneratedShoppingListItem[];

  @IsEnum(ShoppingListStatus)
  status: ShoppingListStatus;

  @IsDate()
  createdAt: string;

  @IsDate()
  updatedAt: string;
}
