import { AggregateRoot } from '@nestjs/cqrs';
import { EntityRepository } from './entity.repository';
import { IdentifiableEntitySchema } from './identifiable-entity.schema';

export abstract class BaseEntityRepository<
  TSchema extends IdentifiableEntitySchema,
  TEntity extends AggregateRoot,
> extends EntityRepository<TSchema, TEntity> {
  abstract getAll(): Promise<TEntity[]>;

  abstract getById(id: string): Promise<TEntity>;
}
