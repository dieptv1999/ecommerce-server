import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';

import { AuthService } from './auth.service';
import { User } from '../users/user.entity';
import { Role } from '../role/role.entity';

@Injectable()
export class AuthSerializer extends PassportSerializer {
  constructor(private readonly authService: AuthService) {
    super();
  }
  serializeUser(
    user: User,
    done: (err: Error, user: { id: number; roles: Role[] }) => void,
  ) {
    console.log(user, 'serializeUser');
    done(null, { id: user.id, roles: user.roles });
  }

  async deserializeUser(
    payload: { id: number; roles: Role[] },
    done: (err: Error, user: Omit<User, 'password'>) => void,
  ) {
    const user = await this.authService.findById(payload.id);
    console.log(user, 'deserializeUser');
    done(null, user);
  }
}
