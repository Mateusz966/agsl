import { IdentifiableEntitySchema } from './identifiable-entity.schema';
import { AggregateRoot } from '@nestjs/cqrs';
import { Repository } from 'typeorm';

export abstract class EntityRepository<
  TSchema extends IdentifiableEntitySchema,
  TEntity extends AggregateRoot,
> extends Repository<TSchema> {}
