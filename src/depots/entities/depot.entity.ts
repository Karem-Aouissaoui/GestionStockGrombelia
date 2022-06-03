import { Article } from 'src/articles/entities/article.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Depot {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nomDep: string;

  @Column({ nullable: true })
  description: string;

  @OneToMany((type) => Article, (article) => article.depot)
  articles: Article[];
}
