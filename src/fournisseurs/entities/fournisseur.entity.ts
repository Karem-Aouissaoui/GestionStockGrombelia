import { Article } from 'src/articles/entities/article.entity';
import { LigneCommande } from 'src/commandes/entities/ligneCommande.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
export class Fournisseur {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  nomFournisseur: string;

  @Column({ nullable: true })
  tel: string;

  @Column({ nullable: true })
  adresse: string;

  @Column({ nullable: true })
  remarque: string;

  @ManyToMany((type) => Article, (article) => article.fournisseurs)
  articles: Article[];
}
