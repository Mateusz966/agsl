import { Command, CommandProps } from '@libs/ddd';

export class CreateUserCommand extends Command {
  readonly email: string;
  readonly password: string;
  readonly nick: string | undefined;

  constructor(props: CommandProps<CreateUserCommand>) {
    super(props);
    this.email = props.email;
    this.password = props.password;
    this.nick = props.nick;
  }
}
