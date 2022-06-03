import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UsersController } from '../users.controller';
import { User } from './user.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: false, unique: true })
  public name: string;
}
