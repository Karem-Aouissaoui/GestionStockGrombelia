import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { encodePassword } from 'src/auth/utils/bcrypt';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Role } from './entities/role.entity';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  //for users array
  /*
  async findOne(username: string): Promise<any | undefined> {
    return this.users.find((user) => user.username === username);
  }*/

  //find all users
  async findAll() {
    return await this.usersRepository.find({ relations: ['role'] });
  }

  //for database

  async create(createUserDto: any) {
    const password = encodePassword(createUserDto.password);
    createUserDto.password = password;
    const role: Role = await this.roleRepository.findOne(createUserDto.role.id);
    createUserDto.role = role;
    return this.usersRepository.save(createUserDto);
  }

  public async findById(id: number): Promise<User | undefined> {
    return this.usersRepository.findOne(id);
  }

  public async findByUsername(username: string): Promise<User | undefined> {
    return (
      await this.usersRepository.find({
        relations: ['role'],
        where: { username: username },
        take: 1,
      })
    )[0];
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return (
      await this.usersRepository.find({
        relations: ['role'],
        where: { email: email },
        take: 1,
      })
    )[0];
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.usersRepository.delete(id);
  }
}
