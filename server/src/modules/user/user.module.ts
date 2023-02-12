import { Logger, Module, Provider } from '@nestjs/common';
import { CreateUserHttpController } from './commands/create-user/create-user.http.controller';
import { CreateUserMessageController } from './commands/create-user/create-user.message.controller';
import { CreateUserService } from './commands/create-user/create-user.service';
import { UserMapper } from './user.mapper';
import { CqrsModule } from '@nestjs/cqrs';
import { UserModel } from '@modules/user/database/user.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModelRepository } from '@modules/user/database/user-model.repository';
import { FindUserByEmailQueryHandler } from '@modules/user/queries/find-user-by-email/find-user-by-email.query-handler';

const httpControllers = [CreateUserHttpController];

const messageControllers = [CreateUserMessageController];

const commandHandlers: Provider[] = [CreateUserService];

const queryHandlers: Provider[] = [FindUserByEmailQueryHandler];

const mappers: Provider[] = [UserMapper];

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([UserModel])],
  controllers: [...httpControllers, ...messageControllers],
  providers: [
    Logger,
    ...commandHandlers,
    ...queryHandlers,
    ...mappers,
    UserModelRepository,
  ],
})
export class UserModule {}
