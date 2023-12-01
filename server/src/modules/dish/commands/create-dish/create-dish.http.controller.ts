import {
  Body,
  ConflictException as ConflictHttpException,
  Controller,
  HttpStatus,
  Post,
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
import { CreateDishCommand } from '@modules/dish/commands/create-dish/create-dish.command';
import { FileFastifyInterceptor } from 'fastify-file-interceptor';
import { Ingredients } from '@modules/dish/domain/value-objects/ingredients.value-object';
import { User } from '@libs/decorators/User.decorator';
import { JwtAuthGuard } from '@modules/auth/jwt-auth.guard';
import { JWTUser } from '@modules/auth/auth.types';
import { CreateDishRequestDto } from '@modules/dish/commands/create-dish/create-dish.request.dto';

@Controller(routesV1.version)
export class CreateDishHttpController {
  constructor(private readonly commandBus: CommandBus) {}

  @ApiOperation({ summary: 'Create a dish with list of ingredients' })
  @ApiConsumes('multipart/form-data')
  @ApiResponse({
    status: HttpStatus.OK,
    type: IdResponse,
  })
  @Post(routesV1.dishes.root)
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileFastifyInterceptor('photo'))
  async create(
    @UploadedFile() photo: Express.Multer.File,
    @Body() { name, ingredients }: CreateDishRequestDto,
    @User() user: JWTUser,
  ): Promise<IdResponse> {
    try {
      const parsedIngredients = new Ingredients(ingredients).unpack();

      const command = new CreateDishCommand({
        name,
        ingredients: parsedIngredients,
        photo,
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
