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

  //@ts-ignore
  async create(user: UserEntity) {
    const res = await this.userRepository.save(this.mapper.toPersistence(user));

    return this.mapper.toDomain(res);
  }

  // async delete(entity: UserEntity): Promise<boolean> {
  //   return Promise.resolve(false);
  // }
  //
  // async findOneById(id: string): Promise<UserEntity> {
  //   const res = await this.em.findOne(UserModel, { id });
  //   return this.mapper.toDomain(res);
  // }
}
