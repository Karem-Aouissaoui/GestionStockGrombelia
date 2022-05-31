import { Article } from 'src/articles/entities/article.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Stock {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  qte_entrante: number;

  @Column()
  date_entree: Date;

  @Column()
  qte_sortante: number;

  @Column()
  date_sortie: Date;

  @ManyToOne(() => Article, (article) => article.stock)
  @JoinColumn()
  article: Article;
}
