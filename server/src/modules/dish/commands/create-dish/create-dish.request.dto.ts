import { IsArray, IsString, MaxLength, MinLength } from 'class-validator';
import { IngredientsProps } from '@modules/dish/domain/value-objects/ingredients.value-object';
import { Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDishRequestDto {
  @ApiProperty()
  @MaxLength(320)
  @MinLength(5)
  @IsString()
  name: string;

  @ApiProperty({ type: CreateDishRequestDto })
  @IsArray()
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return JSON.parse(value);
    } else {
      return value;
    }
  })
  ingredients: IngredientsProps[];
}
