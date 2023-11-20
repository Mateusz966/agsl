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
import { GenerateShoppingListDto } from '@modules/shopping-list/queries/generate-shopping-list/generate-shopping-list.dto';
import { GenerateShoppingListQuery } from '@modules/shopping-list/queries/generate-shopping-list/generate-shopping-list.query';
import { GetDishIngredientsQuery } from '@modules/dish/queries/get-dish-ingredients/get-dish-ingredients.query';
import { IngredientsModel } from '@modules/dish/database/ingredients.model';
@Controller(routesV1.version)
export class GenerateShoppingListHttpController {
  constructor(private readonly queryBus: QueryBus) {}
  @ApiOperation({ summary: 'Create a shopping list' })
  @ApiResponse({ status: HttpStatus.OK, type: IdResponse })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: UserAlreadyExistsError.message,
    type: ApiErrorResponse,
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, type: ApiErrorResponse })
  @Post(routesV1.shoppingList.root)
  @UseGuards(JwtAuthGuard)
  async createShoppingList(
    @User() user: JWTUser,
    @Body() { dishesId }: GenerateShoppingListDto,
  ): Promise<any> {
    try {
      const ingredientsQuery = new GetDishIngredientsQuery(dishesId);
      const list = await this.queryBus.execute<
        GetDishIngredientsQuery,
        IngredientsModel[]
      >(ingredientsQuery);

      const shoppingListQuery = new GenerateShoppingListQuery(user.id, list);
      const shoppingList = await this.queryBus.execute<
        GenerateShoppingListQuery,
        any
      >(shoppingListQuery);
      return shoppingList;
    } catch (error) {
      if (error instanceof UserAlreadyExistsError)
        throw new ConflictHttpException(error.message);
      throw error;
    }
  }
}
