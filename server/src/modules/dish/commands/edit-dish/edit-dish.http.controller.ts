import {
  Body,
  ConflictException as ConflictHttpException,
  Controller,
  HttpStatus,
  Param,
  Patch,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { routesV1 } from '@config/app.routes';
import { ApiConsumes, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CommandBus } from '@nestjs/cqrs';

import { UserAlreadyExistsError } from '@modules/user/domain/user.errors';
import { IdResponse } from '@libs/api/id.response.dto';
import { AggregateID } from '@libs/ddd';
import { ApiErrorResponse } from '@src/libs/api/api-error.response';
import { FileFastifyInterceptor } from 'fastify-file-interceptor';
import { Ingredients } from '@modules/dish/domain/value-objects/ingredients.value-object';
import { User } from '@libs/decorators/User.decorator';
import { JwtAuthGuard } from '@modules/auth/jwt-auth.guard';
import { JWTUser } from '@modules/auth/auth.types';
import { EditDishCommand } from '@modules/dish/commands/edit-dish/edit-dish.command';

@Controller(routesV1.version)
export class EditDishHttpController {
  constructor(private readonly commandBus: CommandBus) {}

  @ApiOperation({ summary: 'Edit a dish with list of ingredients' })
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
  @Patch(`${routesV1.dishes.root}/:id`)
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileFastifyInterceptor('photo'))
  async edit(
    @UploadedFile()
    newPhoto: Express.Multer.File,
    @Body()
    {
      name = '',
      ingredients = '',
      photo,
    }: { name: string; ingredients: string; photo?: null },
    @User() user: JWTUser,
    @Param() { id }: { id: string },
  ): Promise<IdResponse> {
    try {
      const parsedIngredients = new Ingredients(
        JSON.parse(ingredients),
      ).unpack();

      const command = new EditDishCommand({
        id,
        name,
        ingredients: parsedIngredients,
        photo:
          !newPhoto && JSON.parse(photo) === null
            ? JSON.parse(photo)
            : newPhoto,
        userId: user.id,
      });

      const res: AggregateID = await this.commandBus.execute(command);

      return new IdResponse(res);
    } catch (error) {
      if (error instanceof UserAlreadyExistsError)
        throw new ConflictHttpException(error.message);
      throw error;
    }
  }
}
