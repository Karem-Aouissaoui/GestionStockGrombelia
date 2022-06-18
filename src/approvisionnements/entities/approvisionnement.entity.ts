import { now } from 'lodash';
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

  @Column({ nullable: true })
  date_creation: string;

  //relations
  @OneToMany((type) => LigneAppro, (ligneAppro) => ligneAppro.appro, {
    onDelete: 'CASCADE',
    cascade: ['insert'],
  })
  ligneAppros: LigneAppro[];

  @ManyToOne((type) => Demandeur, (demandeur) => demandeur.appros, {
    cascade: ['insert'],
    onDelete: 'CASCADE',
  })
  demandeur: Demandeur;
}
