import { UserEntity } from '@modules/user/domain/user.entity';
import { AuthSignUpResponseDto } from '@modules/auth/dtos/auth-sign-up.response.dto';

export class AuthMapper {
  toResponse(entity: UserEntity): AuthSignUpResponseDto {
    const props = entity.getPropsCopy();
    const response = new AuthSignUpResponseDto(entity);

    response.email = props.email;
    response.nick = props.nick;

    return response;
  }
}
