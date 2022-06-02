import { Article } from 'src/articles/entities/article.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Unite {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  nomUnite: string;

  @Column({ nullable: false })
  codeUnite: string;

  @OneToMany((type) => Article, (article) => article.unite)
  articles: Article[];
}
