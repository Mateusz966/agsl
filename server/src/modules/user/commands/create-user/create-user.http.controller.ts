import {
  Body,
  ConflictException as ConflictHttpException,
  Controller,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { routesV1 } from '@config/app.routes';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CommandBus } from '@nestjs/cqrs';
import { CreateUserCommand } from './create-user.command';
import { CreateUserRequestDto } from './create-user.request.dto';
import { UserAlreadyExistsError } from '@modules/user/domain/user.errors';
import { IdResponse } from '@libs/api/id.response.dto';
import { AggregateID } from '@libs/ddd';
import { ApiErrorResponse } from '@src/libs/api/api-error.response';

@Controller(routesV1.version)
export class CreateUserHttpController {
  constructor(private readonly commandBus: CommandBus) {}

  @ApiOperation({ summary: 'Create a user' })
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
  @Post(routesV1.user.root)
  async create(@Body() body: CreateUserRequestDto): Promise<IdResponse> {
    try {
      const command = new CreateUserCommand(body);

      const res: AggregateID = await this.commandBus.execute(command);

      return new IdResponse(res);
    } catch (error) {
      if (error instanceof UserAlreadyExistsError)
        throw new ConflictHttpException(error.message);
      throw error;
    }
  }
}
