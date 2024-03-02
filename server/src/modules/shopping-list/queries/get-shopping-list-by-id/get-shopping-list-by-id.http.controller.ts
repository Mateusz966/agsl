import {
  ConflictException as ConflictHttpException,
  Controller,
  Get,
  HttpStatus,
  Param,
  UseGuards,
} from '@nestjs/common';
import { routesV1 } from '@config/app.routes';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { QueryBus } from '@nestjs/cqrs';

import { UserAlreadyExistsError } from '@modules/user/domain/user.errors';
import { IdResponse } from '@libs/api/id.response.dto';
import { ApiErrorResponse } from '@src/libs/api/api-error.response';
import { User } from '@libs/decorators/User.decorator';
import { JwtAuthGuard } from '@modules/auth/jwt-auth.guard';
import { JWTUser } from '@modules/auth/auth.types';
import { GetDishByIdQuery } from '@modules/dish/queries/get-dish-by-id/get-dish-by-id.query';
import { DishEntity } from '@modules/dish/domain/dish.entity';
import { DishMapper } from '@modules/dish/dish.mapper';
import { DishResponseDto } from '@modules/dish/dtos/dish.response.dto';
import { ShoppingListResponseDto } from '../../dtos/shopping-list.response.dto';
import { GetShoppingListByIdQuery } from './get-shopping-list-by-id.query';

@Controller(routesV1.version)
export class GetShoppingListByIdHttpController {
  constructor(private readonly queryBus: QueryBus) {}

  @ApiOperation({ summary: 'Get a shopping list' })
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
  @Get(routesV1.shoppingList.get)
  @UseGuards(JwtAuthGuard)
  async getShoppingListById(
    @User() user: JWTUser,
    @Param() { id }: { id: string },
  ): Promise<ShoppingListResponseDto> {
    try {
      const query = new GetShoppingListByIdQuery(id);

      const shoppingList = await this.queryBus.execute<
        GetShoppingListByIdQuery,
        any
      >(query);

      const res = new ShoppingListResponseDto();
      res.createdAt = shoppingList.createdAt;
      res.updatedAt = shoppingList.updatedAt;
      res.id = shoppingList.id;
      res.generatedShoppingList = shoppingList.generatedShoppingList;

      return res;
    } catch (error) {
      if (error instanceof UserAlreadyExistsError)
        throw new ConflictHttpException(error.message);
      throw error;
    }
  }
}
