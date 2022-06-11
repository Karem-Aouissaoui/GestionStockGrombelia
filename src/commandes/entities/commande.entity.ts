import { realpath } from 'fs';
import { Imputation } from 'src/approvisionnements/entities/imputation.entity';
import { Article } from 'src/articles/entities/article.entity';
import { Fournisseur } from 'src/fournisseurs/entities/fournisseur.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { LigneCommande } from './ligneCommande.entity';

@Entity()
export class Commande {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Fournisseur, (fournisseur) => fournisseur.commandes)
  fournisseur: Fournisseur;

  @Column()
  date_commande: Date;

  @Column()
  date_reception: Date;

  @Column()
  reference: string;

  @ManyToOne((type) => Imputation, (imput) => imput.commandes)
  imputation: Imputation;

  @ManyToOne((type) => Article, (article) => article.commandes)
  article: Article;
}
