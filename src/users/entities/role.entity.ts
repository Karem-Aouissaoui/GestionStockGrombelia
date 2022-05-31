import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: false, unique: true })
  public name: string;

  @ManyToMany((type) => User, (user) => user.roles)
  public users: User[];
}
