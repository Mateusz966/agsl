import { UserEntity } from '../domain/user.entity';
import { RepositoryPort } from '@libs/ddd/repository.port';

export interface UserRepositoryPort extends RepositoryPort<UserEntity> {
  findOneByEmail(email: string): Promise<UserEntity | null>;
}
