import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayMinSize,
  IsArray,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { IngredientsProps } from '@modules/dish/domain/value-objects/ingredients.value-object';
import { Type } from 'class-transformer';

export class CreateDishRequestDto {
  @ApiProperty({
    example: 'Butter chicken with rice',
    description: 'Name od dish',
  })
  @MaxLength(320)
  @MinLength(5)
  @IsString()
  readonly name: string;
  @ApiProperty({
    description: 'Optional foto',
  })
  @Type(() => IngredientsProps)
  readonly ingredients: IngredientsProps[];
}
