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
  readonly photo?: FormData;
  @ApiProperty({
    description: 'List of dishes ingredients',
  })
  @IsArray()
  @ValidateNested({ each: true })
  @ArrayMinSize(1)
  readonly ingredients: any[];
}
