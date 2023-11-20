import {
  Body,
  ConflictException as ConflictHttpException,
  Controller,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { routesV1 } from '@config/app.routes';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { QueryBus } from '@nestjs/cqrs';
import { UserAlreadyExistsError } from '@modules/user/domain/user.errors';
import { IdResponse } from '@libs/api/id.response.dto';
import { ApiErrorResponse } from '@libs/api/api-error.response';
import { User } from '@libs/decorators/User.decorator';
import { JwtAuthGuard } from '@modules/auth/jwt-auth.guard';
import { JWTUser } from '@modules/auth/auth.types';
import { DishMapper } from '@modules/dish/dish.mapper';
import { GenerateShoppingListDto } from '@modules/shopping-list/queries/generate-shopping-list/generate-shopping-list.dto';
import { GenerateShoppingListQuery } from '@modules/shopping-list/queries/generate-shopping-list/generate-shopping-list.query';
@Controller(routesV1.version)
export class GenerateShoppingListHttpController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly dishMapper: DishMapper,
  ) {}
  @ApiOperation({ summary: 'Create a shopping list' })
  @ApiResponse({ status: HttpStatus.OK, type: IdResponse })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: UserAlreadyExistsError.message,
    type: ApiErrorResponse,
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, type: ApiErrorResponse })
  @Post(routesV1.dishes['shopping-list'])
  @UseGuards(JwtAuthGuard)
  async createShoppingList(
    @User() user: JWTUser,
    @Body() { dishesId }: GenerateShoppingListDto,
  ): Promise<any> {
    try {
      const query = new GenerateShoppingListQuery(user.id, dishesId);
      const shoppingList = await this.queryBus.execute(query);
      return shoppingList;
      // const query = new GetUserDishesQuery(user.id);
      // const dishes: DishEntity[] = await this.queryBus.execute(query);
      // return this.dishMapper.toResponseList(dishes);
    } catch (error) {
      if (error instanceof UserAlreadyExistsError)
        throw new ConflictHttpException(error.message);
      throw error;
    }
  }
}
