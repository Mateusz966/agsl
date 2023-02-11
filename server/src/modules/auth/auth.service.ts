import { Injectable } from '@nestjs/common';

import * as bcrypt from 'bcrypt';
import { QueryBus } from '@nestjs/cqrs';
import { FindUserByEmailQuery } from '@modules/user/queries/find-user-by-email/find-user-by-email.query';
import { AuthMapper } from '@modules/auth/auth.mapper';
import { AuthSignUpResponseDto } from '@modules/auth/dtos/auth-sign-up.response.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly authMapper: AuthMapper,
    private jwtService: JwtService,
  ) {}

  private async comparePwd(password: string, passwordInDb: string) {
    return await bcrypt.compare(password, passwordInDb);
  }

  async validateUser(
    email: string,
    password: string,
  ): Promise<AuthSignUpResponseDto | null> {
    const query = new FindUserByEmailQuery(email);

    const user = await this.queryBus.execute(query);

    if (await this.comparePwd(password, user.props.password)) {
      return this.authMapper.toResponse(user);
    }
    return null;
  }

  async login(user: AuthSignUpResponseDto) {
    const payload = { email: user.email, sub: user.id };
    return {
      accessToken: this.jwtService.sign(payload),
      ...user,
    };
  }
}
