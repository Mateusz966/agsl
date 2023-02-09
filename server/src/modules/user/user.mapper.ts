import { Mapper } from '@libs/ddd';

import { UserEntity } from './domain/user.entity';
import { UserResponseDto } from './dtos/user.response.dto';
import { Injectable } from '@nestjs/common';
import { UserModel } from '@modules/user/database/user.model';

/**
 * Mapper constructs objects that are used in different layers:
 * Record is an object that is stored in a database,
 * Entity is an object that is used in application domain layer,
 * and a ResponseDTO is an object returned to a user (usually as json).
 */

@Injectable()
export class UserMapper
  implements Mapper<UserEntity, UserModel, UserResponseDto>
{
  toPersistence(entity: UserEntity): UserModel {
    const copy = entity.getPropsCopy();
    const record: UserModel = {
      id: copy.id,
      createdAt: copy.createdAt,
      updatedAt: copy.updatedAt,
      email: copy.email,
      role: copy.role,
      password: copy.password,
      nick: copy.nick,
    };
    return record;
  }

  toDomain(record: UserModel): UserEntity {
    const entity = new UserEntity({
      id: record.id,
      createdAt: new Date(record.createdAt),
      updatedAt: new Date(record.updatedAt),
      props: {
        email: record.email,
        role: record.role,
        password: record.password,
        nick: record.nick,
      },
    });
    return entity;
  }

  toResponse(entity: UserEntity): UserResponseDto {
    const props = entity.getPropsCopy();
    const response = new UserResponseDto(entity);
    response.email = props.email;
    return response;
  }

  /* ^ Data returned to the user is whitelisted to avoid leaks.
     If a new property is added, like password or a
     credit card number, it won't be returned
     unless you specifically allow this.
     (avoid blacklisting, which will return everything
      but blacklisted items, which can lead to a data leak).
  */
}
