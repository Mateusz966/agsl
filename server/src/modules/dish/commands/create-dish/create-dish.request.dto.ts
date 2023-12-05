import { IsArray, IsString, MaxLength, MinLength } from 'class-validator';
import { IngredientsProps } from '@modules/dish/domain/value-objects/ingredients.value-object';
import { Transform } from 'class-transformer';
import { ApiProperty, getSchemaPath } from '@nestjs/swagger';

export class CreateDishRequestDto {
  @ApiProperty({
    name: 'name',
    minLength: 5,
    maxLength: 320,
  })
  @MaxLength(320)
  @MinLength(5)
  @IsString()
  name: string;

  @ApiProperty({
    type: 'array',
    items: { $ref: getSchemaPath(IngredientsProps) },
  })
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
