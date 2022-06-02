import { Article } from 'src/articles/entities/article.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Stock {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @ManyToOne((type) => Article, (article) => article.stocks, {
    onDelete: 'CASCADE',
  })
  article: Article;

  @Column()
  qtemvm: number;

  @CreateDateColumn()
  datemvm: Date;

  @Column({ enum: ['E', 'S'] })
  mouvement: string;
}
