import { Approvisionnement } from 'src/approvisionnements/entities/approvisionnement.entity';
import { Role } from '../entities/role.entity';

export class CreateUserDto {
  username: string;
  password: string;
  roles: Role;
  appro: Approvisionnement;
}
