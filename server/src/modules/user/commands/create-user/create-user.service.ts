import { UserRepositoryPort } from '@modules/user/database/user.repository.port';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { CreateUserCommand } from './create-user.command';
import { UserAlreadyExistsError } from '@modules/user/domain/user.errors';
import { AggregateID } from '@libs/ddd';
import { UserEntity } from '@modules/user/domain/user.entity';

import { ConflictException } from '@libs/exceptions/exception.codes';

@CommandHandler(CreateUserCommand)
export class CreateUserService implements ICommandHandler {
  constructor(private readonly userRepo: UserRepositoryPort) {}

  async execute(command: CreateUserCommand): Promise<AggregateID> {
    const user = UserEntity.create({
      nick: command.nick,
      password: command.password,
      email: command.email,
    });

    try {
      await this.userRepo.create(user);
      return user.id;
    } catch (error) {
      if (error instanceof ConflictException) {
        throw new UserAlreadyExistsError();
      }
      throw error;
    }
  }
}
