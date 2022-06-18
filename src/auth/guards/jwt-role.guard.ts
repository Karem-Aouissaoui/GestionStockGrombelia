import {
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';
import { RoleType } from 'src/users/enums/role-type.enum';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { Roles } from '../models/roles.enum';

@Injectable()
export class JwtRoleGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<RoleType[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );
    if (!requiredRoles) return true;
    const { user } = context.switchToHttp().getRequest();
    return requiredRoles.some((role) => user.role?.include(role));
  }

  /*
  handleRequest(err, user, info: Error) {
    if (user && user.roles && user.roles.includes(Roles.ADMIN)) {
      return user;
    }
    throw new ForbiddenException();
  }*/
}
