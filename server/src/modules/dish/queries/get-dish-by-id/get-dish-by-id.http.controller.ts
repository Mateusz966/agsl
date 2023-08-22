import {
  ConflictException as ConflictHttpException,
  Controller,
  Get,
  HttpStatus,
  Param,
  UseGuards,
} from '@nestjs/common';
import {routesV1} from '@config/app.routes';
import {ApiOperation, ApiResponse} from '@nestjs/swagger';
import {QueryBus} from '@nestjs/cqrs';

import {UserAlreadyExistsError} from '@modules/user/domain/user.errors';
import {IdResponse} from '@libs/api/id.response.dto';
import {ApiErrorResponse} from '@src/libs/api/api-error.response';
import {User} from '@libs/decorators/User.decorator';
import {JwtAuthGuard} from '@modules/auth/jwt-auth.guard';
import {JWTUser} from '@modules/auth/auth.types';
import {GetDishByIdQuery} from '@modules/dish/queries/get-dish-by-id/get-dish-by-id.query';
import {DishEntity} from '@modules/dish/domain/dish.entity';
import {DishMapper} from '@modules/dish/dish.mapper';
import {DishResponseDto} from '@modules/dish/dtos/dish.response.dto';

@Controller(routesV1.version)
export class GetDishByIdHttpController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly dishMapper: DishMapper,
  ) {}

  @ApiOperation({ summary: 'Get a dish with list of ingredients' })
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
  @Get(routesV1.dishes.get)
  @UseGuards(JwtAuthGuard)
  async getDishById(
    @User() user: JWTUser,
    @Param() { id }: { id: string },
  ): Promise<DishResponseDto> {
    try {
      const query = new GetDishByIdQuery(id);
      const dish: DishEntity = await this.queryBus.execute(query);

      return this.dishMapper.toResponse(dish);
    } catch (error) {
      if (error instanceof UserAlreadyExistsError)
        throw new ConflictHttpException(error.message);
      throw error;
    }
  }
}
