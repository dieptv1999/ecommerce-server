import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';

import { AuthService } from './auth.service';
import { User } from '../users/user.entity';

@Injectable()
export class AuthSerializer extends PassportSerializer {
  constructor(private readonly authService: AuthService) {
    super();
  }
  serializeUser(
    user: User,
    done: (err: Error, user: { id: number; roles: number[] }) => void,
  ) {
    done(null, { id: user.id, roles: user.roles?.map((r) => r.id) });
  }

  async deserializeUser(
    payload: { id: number; roles: number[] },
    done: (err: Error, user: Omit<User, 'password'>) => void,
  ) {
    const user = await this.authService.findById(payload.id);
    done(null, user);
  }
}
