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

  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  //for users array
  /*
  async findOne(username: string): Promise<any | undefined> {
    return this.users.find((user) => user.username === username);
  }*/

  //find all users
  async findAll() {
    const users: User[] = await this.usersRepository.find({
      relations: ['roles'],
    });
    console.log(users);
    return users;
  }
  //for database
  public async findByUsername(username: string): Promise<User | undefined> {
    return (
      await this.usersRepository.find({
        relations: ['roles'],
        where: { username: username },
        take: 1,
      })
    )[0];
  }

  public async findById(id: number): Promise<User | undefined> {
    return this.usersRepository.findOne(id);
  }

  async create(createUserDto: any) {
    const password = encodePassword(createUserDto.password);
    createUserDto.password = password;
    const role: Role = await this.roleRepository.findOne(createUserDto.role.id);
    createUserDto.role = role;
    return this.usersRepository.save(createUserDto);
  }

  register(createUserDto: any) {
    return this.usersRepository.save(createUserDto);
  }

  update(id: number, updateUserDto: any) {
    return this.usersRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.usersRepository.delete(id);
  }
}
