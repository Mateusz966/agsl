import {
  IsArray,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { IngredientsProps } from '@modules/dish/domain/value-objects/ingredients.value-object';
import { Transform, Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class EditDishRequestDto {
  @ApiProperty()
  @MaxLength(320)
  @MinLength(5)
  @IsString()
  name: string;

  @ApiProperty({ type: EditDishRequestDto, required: false })
  @IsOptional()
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return JSON.parse(value);
    } else {
      return value;
    }
  })
  photo: null | undefined;

  @ApiProperty({ type: EditDishRequestDto })
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
