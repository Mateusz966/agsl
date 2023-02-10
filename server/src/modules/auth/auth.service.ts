import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  private async comparePwd(password: string, passwordInDb: string) {
    return await bcrypt.compare(password, password);
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && (await this.comparePwd(pass))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
