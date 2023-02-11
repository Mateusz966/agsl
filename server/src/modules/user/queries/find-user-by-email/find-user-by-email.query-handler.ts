import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { FindUserByEmailQuery } from '@modules/user/queries/find-user-by-email/find-user-by-email.query';
import { UserModelRepository } from '@modules/user/database/user-model.repository';
import { UserEntity } from '@modules/user/domain/user.entity';
import { NotFoundException } from '@libs/exceptions/exception.codes';
import { HttpException, HttpStatus } from '@nestjs/common';

@QueryHandler(FindUserByEmailQuery)
export class FindUserByEmailQueryHandler implements IQueryHandler {
  constructor(private readonly userRepo: UserModelRepository) {}

  async execute({ email }: FindUserByEmailQuery): Promise<UserEntity> {
    try {
      const res = await this.userRepo.findOneByEmail(email);

      return res;
    } catch (e) {
      if (e instanceof NotFoundException) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      } else {
        throw e;
      }
    }
  }
}
