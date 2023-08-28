import { UserModel } from '@modules/user/database/user.model';
import { UserEntity } from '@modules/user/domain/user.entity';

export interface UserRepositoryPort {
  findOneByEmail(email: string): Promise<UserModel | null>;
  createOrUpdate(user: UserEntity): Promise<UserModel>;
}
