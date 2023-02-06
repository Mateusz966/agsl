import { Entity, EntityRepositoryType, Enum, Property } from '@mikro-orm/core';
import { ModelBase } from '@libs/db/model.base';
import { UserRoles } from '@modules/user/domain/user.types';
import { UserModelRepository } from '@modules/user/database/user-model.repository';

@Entity({ customRepository: () => UserModelRepository })
export class UserModelEntity extends ModelBase {
  [EntityRepositoryType]?: UserModelRepository;

  @Property({ nullable: true })
  nick: string | undefined;
  @Property({ unique: true })
  email: string;
  @Property()
  password: string;
  @Enum()
  role: UserRoles;

  constructor({ role }: UserModelEntity) {
    super();
    this.role = role;
  }
}
