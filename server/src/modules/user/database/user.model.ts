import { Entity, EntityRepositoryType, Enum, Property } from '@mikro-orm/core';
import { ModelBase } from '@libs/db/model.base';
import { UserRoles } from '@modules/user/domain/user.types';
import { UserModelRepository } from '@modules/user/database/user-model.repository';

@Entity({ customRepository: () => UserModelRepository, tableName: 'user' })
export class UserModel extends ModelBase {
  [EntityRepositoryType]?: UserModelRepository;

  @Property({ nullable: true })
  nick: string | undefined;
  @Property({ unique: true })
  email: string;
  @Property()
  password: string;
  @Enum()
  role: UserRoles;

  constructor({ role, id, email, password, nick }: UserModel) {
    super();
    this.id = id;
    this.role = role;
    this.email = email;
    this.nick = nick;
    this.password = password;
  }
}
