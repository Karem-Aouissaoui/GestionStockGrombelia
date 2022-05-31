import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { encodePassword } from 'src/auth/utils/bcrypt';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
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
  findAll() {
    return this.usersRepository.find();
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

  create(createUserDto: CreateUserDto) {
    const password = encodePassword(createUserDto.password);
    createUserDto.password = password;
    return this.usersRepository.save(createUserDto);
  }

  register(createUserDto: CreateUserDto) {
    return this.usersRepository.save(createUserDto);
  }
  update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.usersRepository.delete(id);
  }
}
