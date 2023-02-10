import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { FindUserByEmailQuery } from '@modules/user/queries/find-user-by-email/find-user-by-email.query';
import { UserModelRepository } from '@modules/user/database/user-model.repository';
import { UserEntity } from '@modules/user/domain/user.entity';

@QueryHandler(FindUserByEmailQuery)
export class FindUserByEmailService implements IQueryHandler {
  constructor(private readonly userRepo: UserModelRepository) {}

  async execute(query: FindUserByEmailQuery): Promise<UserEntity> {
    const res = await this.userRepo.findOneByEmail(query.email);

    return res;
  }
}
