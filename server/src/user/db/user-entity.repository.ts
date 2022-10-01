import { Injectable } from '@nestjs/common';
import { BaseEntityRepository } from '../../database/base-entity.repository';
import { User } from '../User';
import { DataSource } from 'typeorm';
import { UserSchema } from './user.schema';

@Injectable()
export class UserEntityRepository extends BaseEntityRepository<
  UserSchema,
  User
> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  getAll(): Promise<User[]> {
    return Promise.resolve([]);
  }

  getById(id: string): Promise<User> {
    return Promise.resolve(undefined);
  }
}
