import { ExecutionContext, Injectable } from '@nestjs/common';

import { LoggedInGuard } from './logged-in.guard';
import utils from '../common/utils';

@Injectable()
export class AdminGuard extends LoggedInGuard {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();
    return (
      super.canActivate(context) &&
      utils.isAdmin(req.session.passport.user.roles)
    );
  }
}
