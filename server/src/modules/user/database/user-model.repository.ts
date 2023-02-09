import { UserRepositoryPort } from './user.repository.port';
import { SqlRepositoryBase } from '@src/libs/db/sql-repository.base';
import { UserModel } from '@modules/user/database/user.model';

import { UserMapper } from '@modules/user/user.mapper';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { UserEntity } from '@modules/user/domain/user.entity';

/**
 *  Repository is used for retrieving/saving domain entities
 * */

export class UserModelRepository
  extends SqlRepositoryBase<UserModel, UserEntity>
  implements UserRepositoryPort
{
  constructor(
    _em,
    entityName,
    mapper: UserMapper,
    eventEmitter: EventEmitter2,
  ) {
    super(_em, entityName, mapper, eventEmitter);
  }
  async findOneByEmail(email: string): Promise<UserEntity | null> {
    const res = await this._em.findOne(UserModel, { email });
    return this.mapper.toDomain(res);
  }

  async delete(entity: UserEntity): Promise<boolean> {
    return Promise.resolve(false);
  }

  async findOneById(id: string): Promise<UserEntity> {
    const res = await this.em.findOne(UserModel, { id });
    return this.mapper.toDomain(res);
  }
}
