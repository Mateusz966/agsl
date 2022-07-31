import { Query, Resolver } from '@nestjs/graphql';
import { User } from './entities/user.entity';

@Resolver((of) => User)
export class UserResolver {
  constructor() {}
  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }
}
