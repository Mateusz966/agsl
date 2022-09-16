import { Injectable } from '@nestjs/common';
import { EntitySchemaFactory } from '../../database/entity-schema.factory';
import { UserSchema } from './user.schema';
import { User } from '../User';

@Injectable()
export class UserSchemaFactory
  implements EntitySchemaFactory<UserSchema, User>
{
  create(user: User): UserSchema {
    return {
      id: user.getId(),
      email: user.getPassword(),
      name: user.getName(),
      password: user.getPassword(),
    };
  }

  createFromSchema(userSchema: UserSchema): User {
    return new User(
      userSchema.id,
      userSchema.name,
      userSchema.email,
      userSchema.password,
    );
  }
}
