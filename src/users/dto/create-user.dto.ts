import { Role } from '../entities/role.entity';

export class CreateUserDto {
  username: string;
  password: string;
  roles: Role[];
}
