import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUserRequestDto {
  @ApiProperty({
    example: 'john@gmail.com',
    description: 'User email address',
  })
  @MaxLength(320)
  @MinLength(5)
  @IsEmail()
  readonly email: string;
  @ApiProperty({
    description: 'User password',
  })
  @MaxLength(320)
  @MinLength(5)
  @IsString()
  readonly password: string;
  @ApiProperty({
    description: 'User nick',
    example: 'Destroyer69',
  })
  @MaxLength(320)
  @MinLength(5)
  @IsString()
  readonly nick: string;
}
