import { Article } from 'src/articles/entities/article.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Approvisionnement {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany((type) => Article, (article) => article.approvisionnement)
  articles: Article[];

  @ManyToMany((type) => User, (user) => user.approvisionnements)
  users: User[];

  @Column()
  description: string;
}
