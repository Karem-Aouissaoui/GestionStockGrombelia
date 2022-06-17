import { Article } from 'src/articles/entities/article.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Categorie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nomCat: string;

  //relations

  @OneToMany(() => Article, (article) => article.categorie, {
    onDelete: 'CASCADE',
  })
  articles: Article[];
}
