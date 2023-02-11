import {
  Body,
  ConflictException as ConflictHttpException,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { routesV1 } from '@config/app.routes';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

import { UserAlreadyExistsError } from '@modules/user/domain/user.errors';
import { IdResponse } from '@libs/api/id.response.dto';
import { ApiErrorResponse } from '@src/libs/api/api-error.response';
import { AuthSignUpRequestDto } from '@modules/auth/dtos/auth-sign-up.request.dto';

import { AuthService } from '@modules/auth/auth.service';
import { AuthSignUpResponseDto } from '@modules/auth/dtos/auth-sign-up.response.dto';
import { LocalAuthGuard } from '@modules/auth/local-auth.guard';
import {JwtAuthGuard} from "@modules/auth/jwt-auth.guard";

@Controller(routesV1.version)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Sign up a user' })
  @ApiResponse({
    status: HttpStatus.OK,
    type: IdResponse,
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: UserAlreadyExistsError.message,
    type: ApiErrorResponse,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    type: ApiErrorResponse,
  })
  @Post(routesV1.auth.mobile['sign-in'])
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  async signUpMobile(@Req() req): Promise<any> {
    try {
      return this.authService.login(req.user);
    } catch (error) {
      if (error instanceof UserAlreadyExistsError)
        throw new ConflictHttpException(error.message);
      throw error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post(routesV1.auth.dashboard['sign-in'])
  async signUpDashboard(
    @Body() { email, password }: AuthSignUpRequestDto,
  ): Promise<AuthSignUpResponseDto> {
    try {
      return this.authService.validateUser(email, password);
    } catch (error) {
      if (error instanceof UserAlreadyExistsError)
        throw new ConflictHttpException(error.message);
      throw error;
    }
  }
}
