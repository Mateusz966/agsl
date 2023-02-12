import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { FindUserByEmailQuery } from '@modules/user/queries/find-user-by-email/find-user-by-email.query';
import { UserModelRepository } from '@modules/user/database/user-model.repository';
import { UserEntity } from '@modules/user/domain/user.entity';

import { UserMapper } from '@modules/user/user.mapper';
import { HttpException, HttpStatus } from '@nestjs/common';

@QueryHandler(FindUserByEmailQuery)
export class FindUserByEmailQueryHandler implements IQueryHandler {
  constructor(
    private readonly userRepo: UserModelRepository,
    private readonly userMapper: UserMapper,
  ) {}

  async execute({ email }: FindUserByEmailQuery): Promise<UserEntity> {
    const res = await this.userRepo.findOneByEmail(email);

    if (!res) {
      throw new HttpException('user not found', HttpStatus.NOT_FOUND);
    }

    return this.userMapper.toDomain(res);
  }
}
