import { DomainEvent, DomainEventProps } from '@libs/ddd';
import { UserRoles } from '@modules/user/domain/user.types';

export class UserCreatedDomainEvent extends DomainEvent {
  readonly email: string;
  readonly password: string;
  readonly nick: string | undefined;
  readonly role: UserRoles;

  constructor(props: DomainEventProps<UserCreatedDomainEvent>) {
    super(props);
    this.email = props.email;
    this.password = props.password;
    this.nick = props.nick;
    this.role = props.role;
  }
}
