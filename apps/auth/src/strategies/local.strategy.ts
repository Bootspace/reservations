import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { UsersService } from 'apps/auth/src/users/users.service';
import { Strategy } from 'passport-local';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UsersService) {
    super({ usernameField: 'email' });
  }

  // async validate(email: string, password: string): Promise<any> {
  //   try {
  //     return await this.userService.verifyUser(email, password);
  //   } catch (error) {
  //     throw new UnauthorizedException(error);
  //   }
  // }
  async validate(email: string, password: string): Promise<any> {
    const user = await this.userService.verifyUser(email, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
