import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayMinSize,
  IsArray,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested,
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
  @IsOptional()
  readonly photo?: any;
  @ApiProperty({
    description: 'List of dishes ingredients',
    example: [
      { name: 'Tomatoes', amount: '1', unit: 'kg' },
    ] as IngredientsProps[],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @ArrayMinSize(1)
  @Type(() => IngredientsProps)
  readonly ingredients: IngredientsProps[];
}
