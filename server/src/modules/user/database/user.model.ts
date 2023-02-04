import { Entity, Enum, Property } from '@mikro-orm/core';
import { UserRepository } from '@modules/user/database/user.repository';
import { ModelBase } from '@libs/db/model.base';
import { UserRoles } from '@modules/user/domain/user.types';

@Entity({ customRepository: () => UserRepository })
export class UserModel extends ModelBase {
  @Property({ nullable: true })
  nick: string | undefined;
  @Property({ unique: true })
  email: string;
  @Property()
  password: string;
  @Enum()
  role: UserRoles;
}
