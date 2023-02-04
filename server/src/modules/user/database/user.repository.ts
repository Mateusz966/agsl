import { UserRepositoryPort } from './user.repository.port';
import { SqlRepositoryBase } from '@src/libs/db/sql-repository.base';
import { Injectable } from '@nestjs/common';
import { EntityRepository } from '@mikro-orm/postgresql';
import { UserModel } from '@modules/user/database/user.model';

import { UserMapper } from '@modules/user/user.mapper';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { UserEntity } from '@modules/user/domain/user.entity';

/**
 *  Repository is used for retrieving/saving domain entities
 * */
@Injectable()
export class UserRepository
  extends SqlRepositoryBase<EntityRepository<UserModel>, any, any>
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

  async create(findOptions): Promise<UserEntity[]> {
    const res = this._em.create(UserModel, findOptions);
    return this.mapper.toDomain(res);
  }

  async delete(entity: UserEntity): Promise<boolean> {
    return Promise.resolve(false);
  }

  async findOneById(id: string): Promise<UserEntity> {
    const res = await this.em.findOne(UserModel, { id });
    return this.mapper.toDomain(res);
  }

  findd(findOptions: any): Promise<UserEntity[]> {
    return Promise.resolve([]);
  }
}
