import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

const inputLength = {
  max: 320,
  min: 5,
};

export class CreateUserRequestDto {
  @ApiProperty({
    example: 'john@gmail.com',
    description: 'Email address',
    minLength: inputLength.min,
    maxLength: inputLength.max,
  })
  @MaxLength(inputLength.max)
  @MinLength(inputLength.min)
  @IsEmail()
  readonly email: string;
  @ApiProperty({
    description: 'Password',
    minLength: inputLength.min,
    maxLength: inputLength.max,
  })
  @MaxLength(inputLength.max)
  @MinLength(inputLength.min)
  @IsString()
  readonly password: string;
  @ApiProperty({
    description: 'Nick',
    example: 'Destroyer69',
    minLength: inputLength.min,
    maxLength: inputLength.max,
  })
  @MaxLength(inputLength.max)
  @MinLength(inputLength.min)
  @IsString()
  readonly nick: string;
}
