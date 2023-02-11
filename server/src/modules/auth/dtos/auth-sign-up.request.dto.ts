import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class AuthSignUpRequestDto {
  @ApiProperty({
    example: 'joh-doe@gmail.com',
    description: "User's email address",
  })
  @MaxLength(320)
  @MinLength(5)
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'HardPasswordd',
    description: "User's password",
  })
  @MaxLength(320)
  @MinLength(5)
  @IsString()
  password: string;
}
