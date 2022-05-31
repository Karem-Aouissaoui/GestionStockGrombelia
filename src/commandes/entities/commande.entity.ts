import { realpath } from 'fs';
import { Article } from 'src/articles/entities/article.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { LigneCommande } from './ligneCommande.entity';

@Entity()
export class Commande {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany((type) => LigneCommande, (ligneCommande) => ligneCommande.commande)
  lignecommandes: LigneCommande[];

  @Column()
  qte: number;

  @Column()
  date_livraison: Date;

  @Column()
  date_reception: Date;

  @Column({ type: 'real' })
  montant_total: string;

  @Column()
  etat: boolean;

  @CreateDateColumn()
  date_creation: String;

  @UpdateDateColumn()
  date_modification: string;
}
