import { CqrsModule } from '@nestjs/cqrs';
import { AuthController } from '@modules/auth/auth.controller';
import { Logger, Module } from '@nestjs/common';
import { AuthService } from '@modules/auth/auth.service';
import { AuthMapper } from '@modules/auth/auth.mapper';
import { LocalStrategy } from '@modules/auth/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import {JwtStrategy} from "@modules/auth/jwt.strategy";

const httpControllers = [AuthController];
@Module({
  imports: [
    CqrsModule,
    PassportModule,
    JwtModule.register({
      secret: 'test',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [...httpControllers],
  providers: [Logger, AuthService, AuthMapper, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
