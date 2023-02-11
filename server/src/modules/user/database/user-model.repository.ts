import { UserRepositoryPort } from './user.repository.port';
import { UserModel } from '@modules/user/database/user.model';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserMapper } from '@modules/user/user.mapper';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { UserEntity } from '@modules/user/domain/user.entity';
import { NotFoundException } from '@libs/exceptions/exception.codes';

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
    private eventEmitter: EventEmitter2,
  ) {
    super(
      userRepository.target,
      userRepository.manager,
      userRepository.queryRunner,
    );
  }
  //@ts-ignore
  async findOneByEmail(email: string): Promise<UserEntity> {
    const res = await this.userRepository.findOne({ where: { email } });

    if (!res) {
      throw new NotFoundException('user not found');
    }

    return this.mapper.toDomain(res);
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
