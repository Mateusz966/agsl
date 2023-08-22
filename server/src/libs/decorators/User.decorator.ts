import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JWTUser } from '@modules/auth/auth.types';

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): JWTUser => {
    const request = ctx.switchToHttp().getRequest();
    return request.user as JWTUser;
  },
);
