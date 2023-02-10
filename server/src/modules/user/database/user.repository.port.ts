import { RepositoryPort } from '@libs/ddd/repository.port';
import { UserModel } from '@modules/user/database/user.model';

export interface UserRepositoryPort extends RepositoryPort<UserModel> {
  findOneByEmail(email: string): Promise<UserModel | null>;
}
