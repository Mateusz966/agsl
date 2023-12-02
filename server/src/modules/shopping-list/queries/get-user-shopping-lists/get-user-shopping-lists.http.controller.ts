import {
  ConflictException as ConflictHttpException,
  Controller,
  Get,
  HttpStatus,
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

import {
  ShoppingListResponseDto,
  UserShoppingListsResponseDto,
} from '../../dtos/shopping-list.response.dto';
import { GetUserShoppingListsQuery } from './get-user-shopping-lists.query';

@Controller(routesV1.version)
export class GetUserShoppingListsHttpController {
  constructor(private readonly queryBus: QueryBus) {}
  @ApiOperation({ summary: 'Get shopping lists' })
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
  @Get(routesV1.shoppingList.root)
  @UseGuards(JwtAuthGuard)
  async getUserShoppingLists(
    @User() user: JWTUser,
  ): Promise<UserShoppingListsResponseDto> {
    try {
      const query = new GetUserShoppingListsQuery(user.id);
      const shoppingLists = await this.queryBus.execute<
        GetUserShoppingListsQuery,
        any[]
      >(query);

      const mappedShoppingLists = shoppingLists.map((shoppingList) => {
        const res = new ShoppingListResponseDto();
        res.createdAt = shoppingList.createdAt;
        res.updatedAt = shoppingList.updatedAt;
        res.id = shoppingList.id;
        res.generatedShoppingList = shoppingList.generatedShoppingList;
        return res;
      });

      const userShoppingListsResponse = new UserShoppingListsResponseDto();
      userShoppingListsResponse.userShoppingLists = mappedShoppingLists;

      return userShoppingListsResponse;
    } catch (error) {
      if (error instanceof UserAlreadyExistsError)
        throw new ConflictHttpException(error.message);
      throw error;
    }
  }
}
