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
import { LigneAppro } from './ligneAppro.entity';

@Entity()
export class Approvisionnement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  reference: string;

  @Column({ default: 'false' })
  etat: boolean;

  @CreateDateColumn()
  date_creation: string;
  /*
  @ManyToOne((type) => Article, (article) => article.approvisionnement)
  @JoinColumn()
  article: Article;

  
  
  @ManyToOne((type) => Fournisseur, (fournisseur) => fournisseur.appro)
  fournisseur: Fournisseur;


  */
  //relations
  @OneToMany((type) => LigneAppro, (ligneAppro) => ligneAppro.appro)
  ligneAppros: LigneAppro[];

  @ManyToOne((type) => Imputation, (imputation) => imputation.appro, {
    cascade: ['insert'],
  })
  imputation: Imputation;
  @ManyToOne((type) => Demandeur, (demandeur) => demandeur.appro, {
    cascade: ['insert'],
  })
  demandeur: Demandeur;
}
