import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  private readonly roles = [
    { nomRole: 'WEBMASTER' },
    { nomRole: 'ADMIN' },
    { nomRole: 'MAGASINIER' },
    { nomRole: 'RFINANCIER' },
    { nomRole: 'MEMBRE' },
  ];

  //create new role
  async create(newRole: CreateRoleDto) {
    return await this.roleRepository.save(newRole);
  }

  //findALL roles
  async findAll() {
    return await this.roleRepository.find({ relations: ['users'] });
  }

  async findById(id: number) {
    return await this.roleRepository.findOne(id);
  }

  async update(id: number, updateRole: UpdateRoleDto) {
    return await this.update(id, updateRole);
  }

  async remove(id: number) {
    return await this.roleRepository.delete(id);
  }

  //Array<Promise<Role>>
  async createInit() {
    console.log('exec');
    for (var role of this.roles) {
      console.log(role);
      var exist = await this.roleRepository
        .findOne(role)
        .then(async (dbrole) => {
          if (dbrole) {
            console.log('found');
          } else {
            await this.roleRepository.save(role);
          }
        });
    }
    /*
    return this.roles.map(async (role: CreateRoleDto) => {
      return await this.roleRepository
        .findOne({ name: role.name })
        .then(async (dbRole) => {
          // We check if a role already exists.
          // If it does don't create a new one.
          if (dbRole) {
            console.log('found');

            return Promise.resolve(null);
          }
          return Promise.resolve(await this.roleRepository.create(role));
        })
        .catch((error) => console.log('error'));
    });*/
  }
}
