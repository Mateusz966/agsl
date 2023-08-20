import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength } from 'class-validator';
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
  name: string;
  @ApiProperty({
    description: 'Optional foto',
  })
  @IsString()
  photo?: string;

  @Type(() => IngredientsProps)
  ingredients: IngredientsProps[];
}
