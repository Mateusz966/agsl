import { ApiProperty } from '@nestjs/swagger';
import { ResponseBase } from '@libs/api/response.base';
import { IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { IngredientsProps } from '@modules/dish/domain/value-objects/ingredients.value-object';

export class DishResponseDto extends ResponseBase {
  @ApiProperty({
    example: 'Rice with curry',
    description: 'Dish name',
  })
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  photo?: string;

  @Type(() => IngredientsProps)
  ingredients: IngredientsProps[];
}
