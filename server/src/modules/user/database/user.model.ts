import { ModelBase } from '@libs/db/model.base';
import { UserRoles } from '@modules/user/domain/user.types';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'user' })
export class UserModel extends ModelBase {
  @Column({ nullable: true })
  nick: string | undefined;
  @Column({ unique: true })
  email: string;
  @Column()
  password: string;
  @Column({
    type: 'enum',
    enum: UserRoles,
    default: UserRoles.user,
  })
  role: UserRoles;
}
