import { ApiProperty } from '@nestjs/swagger';
import { ResponseBase } from '@libs/api/response.base';

export class DishResponseDto extends ResponseBase {
  @ApiProperty({
    example: 'Rice with curry',
    description: 'Dish name',
  })
  name: string;

}
