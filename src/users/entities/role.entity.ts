import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UsersController } from '../users.controller';
import { User } from './user.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, unique: true })
  public nomRole: string;

  //relations
  @OneToMany((type) => User, (user) => user.role)
  users: User[];
}
