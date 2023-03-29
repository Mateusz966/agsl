import {
  Body,
  ConflictException as ConflictHttpException,
  Controller,
  HttpStatus,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { routesV1 } from '@config/app.routes';
import { ApiConsumes, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CommandBus } from '@nestjs/cqrs';

import { UserAlreadyExistsError } from '@modules/user/domain/user.errors';
import { IdResponse } from '@libs/api/id.response.dto';
import { AggregateID } from '@libs/ddd';
import { ApiErrorResponse } from '@src/libs/api/api-error.response';
import { CreateDishCommand } from '@modules/dish/commands/create-dish/create-dish.command';
import { FileFastifyInterceptor } from 'fastify-file-interceptor';

@Controller(routesV1.version)
export class CreateDishHttpController {
  constructor(private readonly commandBus: CommandBus) {}

  @ApiOperation({ summary: 'Create a dish with list of ingredients' })
  @ApiConsumes('multipart/form-data')
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
  @Post(routesV1.dishes.root)
  @UseInterceptors(FileFastifyInterceptor('photo'))
  async create(
    @UploadedFile() photo: Express.Multer.File,
    @Body() body,
  ): Promise<IdResponse> {
    try {
      const command = new CreateDishCommand({ ...body, photo });

      const res: AggregateID = await this.commandBus.execute(command);

      return new IdResponse(res);
    } catch (error) {
      if (error instanceof UserAlreadyExistsError)
        throw new ConflictHttpException(error.message);
      throw error;
    }
  }
}
