import { Article } from 'src/articles/entities/article.entity';
import { Fournisseur } from 'src/fournisseurs/entities/fournisseur.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Demandeur } from './demandeur.entity';
import { Imputation } from './imputation.entity';

@Entity()
export class Approvisionnement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  reference: string;

  @ManyToOne((type) => Article, (article) => article.approvisionnement)
  @JoinColumn()
  article: Article;

  @Column({ nullable: true })
  qte_demande: number;

  @Column({ nullable: true })
  qte_commande: number;

  @ManyToOne((type) => Imputation, (imputation) => imputation.appro, {
    cascade: ['insert'],
  })
  imputation: Imputation;

  @ManyToOne((type) => Demandeur, (demandeur) => demandeur.appro, {
    cascade: ['insert'],
  })
  demandeur: Demandeur;

  @Column({ default: 'false' })
  valide: boolean;

  @ManyToOne((type) => Fournisseur, (fournisseur) => fournisseur.appro)
  fournisseur: Fournisseur;

  @Column({ nullable: true })
  description: string;

  @CreateDateColumn()
  date_creation: string;
}
