import { Logger, Module, Provider } from '@nestjs/common';
import { CreateUserHttpController } from './commands/create-user/create-user.http.controller';
import { CreateUserMessageController } from './commands/create-user/create-user.message.controller';
import { CreateUserService } from './commands/create-user/create-user.service';
import { UserMapper } from './user.mapper';
import { CqrsModule } from '@nestjs/cqrs';
import { UserModel } from '@modules/user/database/user.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModelRepository } from '@modules/user/database/user-model.repository';

const httpControllers = [CreateUserHttpController];

const messageControllers = [CreateUserMessageController];

const commandHandlers: Provider[] = [CreateUserService];

const mappers: Provider[] = [UserMapper];

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([UserModel])],
  controllers: [...httpControllers, ...messageControllers],
  providers: [Logger, ...commandHandlers, ...mappers, UserModelRepository],
})
export class UserModule {}
