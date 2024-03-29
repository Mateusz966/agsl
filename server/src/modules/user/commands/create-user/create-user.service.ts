import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { CreateUserCommand } from './create-user.command';
import { UserAlreadyExistsError } from '@modules/user/domain/user.errors';
import { AggregateID } from '@libs/ddd';
import { UserEntity } from '@modules/user/domain/user.entity';

import { ConflictException } from '@libs/exceptions/exception.codes';
import { UserModelRepository } from '@modules/user/database/user-model.repository';
import * as bcrypt from 'bcrypt';

import { EventEmitter2 } from '@nestjs/event-emitter';

@CommandHandler(CreateUserCommand)
export class CreateUserService implements ICommandHandler {
  constructor(
    private readonly userRepo: UserModelRepository,
    private readonly eventEmitter: EventEmitter2,
  ) {}

  async execute(command: CreateUserCommand): Promise<AggregateID> {
    const user = UserEntity.create({
      nick: command.nick,
      password: await this.hashPwd(command.password),
      email: command.email,
    });

    try {
      await this.userRepo.createOrUpdate(user);
      await user.publishEvents(this.eventEmitter);

      return user.id;
    } catch (error) {
      if (error instanceof ConflictException) {
        throw new UserAlreadyExistsError();
      }
      throw error;
    }
  }

  private async hashPwd(pwd: string) {
    return await bcrypt.hash(pwd, 10);
  }
}
