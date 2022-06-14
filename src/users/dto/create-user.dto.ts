import { Role } from '../entities/role.entity';

export class CreateUserDto {
  username: string;
  password: string;
  email: string;
  tel: string;
  role: Role;
}
