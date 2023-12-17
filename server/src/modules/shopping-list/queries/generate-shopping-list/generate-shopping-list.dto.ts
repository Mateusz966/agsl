import { IsArray, IsNumber, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class ShoppingListElement {
  @IsString()
  id: string;

  @IsNumber()
  quantity: number;
}

export class GenerateShoppingListDto {
  @ApiProperty({ type: GenerateShoppingListDto, required: true })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ShoppingListElement)
  dishesId: ShoppingListElement[];
}
