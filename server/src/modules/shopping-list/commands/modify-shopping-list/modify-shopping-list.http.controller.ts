import {
  Body,
  ConflictException as ConflictHttpException,
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { routesV1 } from '@config/app.routes';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CommandBus } from '@nestjs/cqrs';

import { UserAlreadyExistsError } from '@modules/user/domain/user.errors';
import { User } from '@libs/decorators/User.decorator';
import { JwtAuthGuard } from '@modules/auth/jwt-auth.guard';
import { JWTUser } from '@modules/auth/auth.types';
import { ModifyShoppingListCommand } from '@modules/shopping-list/commands/modify-shopping-list/modify-shopping-list.command';
import { ModifyShoppingListRequestDto } from '@modules/shopping-list/dtos/modify-shopping-list.request.dto';

@Controller(routesV1.version)
export class ModifyShoppingListHttpController {
  constructor(private readonly commandBus: CommandBus) {}

  @ApiOperation({ summary: 'Modify a shopping list' })
  @ApiResponse({
    status: HttpStatus.OK,
  })
  @Patch(routesV1.shoppingList.modifyList)
  @HttpCode(HttpStatus.NO_CONTENT)
  @UseGuards(JwtAuthGuard)
  async modifyShoppingList(
    @User() user: JWTUser,
    @Param('listId') listId: string,
    @Body() { ingredients }: ModifyShoppingListRequestDto,
  ) {
    console.log(ingredients, 'ingredients');
    try {
      const command = new ModifyShoppingListCommand({
        listId,
        ingredients,
      });
      await this.commandBus.execute(command);
    } catch (error) {
      if (error instanceof UserAlreadyExistsError)
        throw new ConflictHttpException(error.message);
      throw error;
    }
  }
}
