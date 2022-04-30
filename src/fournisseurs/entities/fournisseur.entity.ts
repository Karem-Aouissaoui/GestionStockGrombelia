import { Article } from 'src/articles/entities/article.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Fournisseur {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nomFournisseur: string;

  @Column()
  tel: string;

  @ManyToMany(() => Article, (article) => article.fournisseur)
  article: Article[];
}
