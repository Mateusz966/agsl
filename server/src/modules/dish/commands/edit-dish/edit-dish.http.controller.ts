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
import { FileFastifyInterceptor } from 'fastify-file-interceptor';
import { Ingredients } from '@modules/dish/domain/value-objects/ingredients.value-object';
import { User } from '@libs/decorators/User.decorator';
import { JwtAuthGuard } from '@modules/auth/jwt-auth.guard';
import { JWTUser } from '@modules/auth/auth.types';
import { EditDishCommand } from '@modules/dish/commands/edit-dish/edit-dish.command';
import { EditDishRequestDto } from '@modules/dish/commands/edit-dish/edit-dish.request.dto';

@Controller(routesV1.version)
export class EditDishHttpController {
  constructor(private readonly commandBus: CommandBus) {}

  @ApiOperation({ summary: 'Edit a dish with list of ingredients' })
  @ApiConsumes('multipart/form-data')
  @ApiResponse({
    status: HttpStatus.OK,
    type: IdResponse,
  })
  @Patch(`${routesV1.dishes.root}/:id`)
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileFastifyInterceptor('photo'))
  async edit(
    @UploadedFile()
    newPhoto: Express.Multer.File | undefined,
    @Body()
    { name, ingredients, photo, ingredientsIdsToDelete }: EditDishRequestDto,
    @User() user: JWTUser,
    @Param() { id }: { id: string },
  ): Promise<IdResponse> {
    try {
      const parsedIngredients = new Ingredients(ingredients).unpack();

      const command = new EditDishCommand({
        id,
        name,
        ingredients: parsedIngredients,
        photo: photo === null ? photo : newPhoto,
        userId: user.id,
        ingredientsIdsToDelete,
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
