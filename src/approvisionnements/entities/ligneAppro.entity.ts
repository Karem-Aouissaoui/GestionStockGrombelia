import { Article } from 'src/articles/entities/article.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Approvisionnement } from './approvisionnement.entity';

@Entity()
export class LigneAppro {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  qte_demande: number;
  @ManyToOne((type) => Article, (article) => article.ligneAppros)
  article: Article;
  @ManyToOne((type) => Approvisionnement, (appro) => appro.ligneAppros)
  appro: Approvisionnement;
}
