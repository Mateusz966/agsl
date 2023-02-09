import { EntityRepository, SqlEntityManager } from '@mikro-orm/postgresql';
import { EntityName } from '@mikro-orm/core';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { AggregateRoot, Mapper } from '@libs/ddd';
import { UserModel } from '@modules/user/database/user.model';

export abstract class SqlRepositoryBase<
  T extends object,
  Aggregate extends AggregateRoot<any>,
> extends EntityRepository<T> {
  protected constructor(
    _em: SqlEntityManager,
    entityName: EntityName<T>,
    protected readonly mapper: Mapper<Aggregate, T>,
    protected readonly eventEmitter: EventEmitter2,
  ) {
    super(_em, entityName);
    this.mapper = mapper;
    this.eventEmitter = eventEmitter;
  }

  // @ts-ignore
  override async create(data: Aggregate): Promise<Aggregate | null> {
    const res = this._em.create(UserModel, data);

    return this.mapper.toDomain(res);
  }
}
