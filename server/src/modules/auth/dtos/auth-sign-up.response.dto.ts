import { ApiProperty } from '@nestjs/swagger';
import { ResponseBase } from '@libs/api/response.base';

export class AuthSignUpResponseDto extends ResponseBase {
  @ApiProperty({
    example: 'joh-doe@gmail.com',
    description: "User's email address",
  })
  email: string;

  @ApiProperty({
    example: 'France',
    description: "User's country of residence",
  })
  nick: string | undefined;
}
