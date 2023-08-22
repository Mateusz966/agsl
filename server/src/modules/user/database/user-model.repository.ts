import { UserRepositoryPort } from './user.repository.port';
import { UserModel } from '@modules/user/database/user.model';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserMapper } from '@modules/user/user.mapper';
import { UserEntity } from '@modules/user/domain/user.entity';

/**
 *  Repository is used for retrieving/saving domain entities
 * */

export class UserModelRepository
  extends Repository<UserModel>
  implements UserRepositoryPort
{
  constructor(
    @InjectRepository(UserModel)
    private userRepository: Repository<UserModel>,
    private mapper: UserMapper,
  ) {
    super(
      userRepository.target,
      userRepository.manager,
      userRepository.queryRunner,
    );
  }

  async findOneByEmail(email: string): Promise<UserModel | null> {
    return await this.userRepository.findOne({ where: { email } });
  }

  async createOrUpdate(user: UserEntity) {
    return await this.userRepository.save(this.mapper.toPersistence(user));
  }
}
